import keymirror from 'keymirror';
import Translate, {
  Plural,
  Gender,
  FileAdapter,
  MemoryAdapter,
  Caches,
  Mode,
  DummyCache,
  MemoryCache,
} from './index';

async function getData(path) {
  const file = require(path);
  return file && file.default
    ? file.default
    : file;
}

describe('Translate', () => {
  let t = null;

  it('should be able to create instance', () => {
    t = new Translate({
      adapter: new FileAdapter({
        path: `${__dirname}/locales`,
        getData,
      }),
    });
  });

  it('should be able to load locale', async () => {
    await t.setLocale('en_US');
  });

  it('set simple translation property', () => {
    t.set('varName', 'Adam');
    t.set('varName', 'Peter');
  });

  it('get simple translation with variable', () => {
    expect(t.get('name', { lastName: 'Fedor' })).toBe('Zlatko Fedor');
  });

  it('get simple translation with complex variable', () => {
    expect(t.get('nameComplex.long')).toBe('Zlatko Fedor');
  });

  it('get simple translation with default complex variable', () => {
    expect(t.get('nameComplex.short')).toBe('Zlatik');
  });

  it('get simple translation with local translation', () => {
    expect(t.get('about')).toBe('About Zlatkove');
  });

  it('get simple translation with default local translation', () => {
    expect(t.get('aboutDefault')).toBe('About Zlatik');
  });

  it('get array translation', () => {
    expect(t.get('user.crashed', {
      user1: {
        gender: Gender.MALE,
        firstName: 'Adam',
      },
      user2: {
        firstName: 'Lisa',
        gender: Gender.FEMALE,
      },
    })).toBe('Adam spadol a Lisa spadla');
  });

  it('get translation with variable and reference', () => {
    expect(t.get('greeting', {
      daypart: 'evening',
      user: {
        firstName: 'Zlatko',
      },
    })).toBe('Good evening Zlatko');
  });

  it('should be able to escape variable notation', () => {
    expect(t.get('escaped')).toBe('Good {dayparts.$daypartVariant} {$user.firstName}');
  });


  it('should be able to use conditioned translation with complex variables', () => {
    expect(t.get('working', {
      user1: {
        gender: 'male',
        name: 'Zlatko',
      },
      user2: {
        gender: 'female',
        name: 'Livia',
      },
    })).toBe('Boy Zlatko working with girl Livia');

    expect(t.get('working', {
      user1: {
        gender: 'male',
        name: 'Zlatko',
      },
      user2: {
        name: 'Livia',
      },
    })).toBe('Boy Zlatko working with boy or girl named Livia');

    expect(t.get('working2', {
      user1: {
        gender: 'male',
        name: 'Zlatko',
      },
      user2: {
        gender: 'female',
        name: 'Livia',
      },
    })).toBe('Boy Zlatko working with girl Livia');
  });

  it('should be able to get translation by dot notation', () => {
    expect(t.get('dot.notation.test', {
      name: 'Zlatko',
    })).toBe('Hello dot notation Zlatko');
  });

  it('should be able to use plural', () => {
    const user = {
      name: 'Zlatko',
      followers: 15,
    };

    expect(t.get('followers', {
      user,
    })).toBe('Zlatko has 15 followers');
  });

  it('should be able to use plural with smart variable', () => {
    const user = {
      name: 'Zlatko',
      followers: 15,
    };

    expect(t.get('followersSmart', {
      user,
    })).toBe('Zlatko has 15 followers');

    expect(t.get('followersSmart', {
      user: {
        name: 'Zlatko',
        followers: 1,
      },
    })).toBe('Zlatko has 1 follower');
  });

  it('should be able to use ordinal', () => {
    const user = {
      position: 15,
    };

    expect(t.get('ordinal', {
      position: 1,
    })).toBe('Take the 1st right');

    expect(t.get('ordinal', {
      position: 2,
    })).toBe('Take the 2nd right');

    expect(t.get('ordinal', {
      position: 3,
    })).toBe('Take the 3rd right');

    expect(t.get('ordinal', {
      position: 4,
    })).toBe('Take the 4th right');

    expect(t.get('ordinal', {
      position: 11,
    })).toBe('Take the 11th right');

    expect(t.get('ordinal', {
      position: 21,
    })).toBe('Take the 21st right');

    expect(t.get('ordinal', {
      position: 22,
    })).toBe('Take the 22nd right');

    expect(t.get('ordinal', {
      position: 33,
    })).toBe('Take the 33rd right');

    expect(t.get('ordinal', {
      position: 44,
    })).toBe('Take the 44th right');
  });


  it('should be not able to get non existing translation', () => {
    expect(t.get('notation.test')).toBe('Missing default translation for: notation.test');
  });

  it('should be not able to get non existing translation', () => {
    expect(t.get('dot.notation.testNonExist')).toBe('Missing default translation for: dot.notation.testNonExist');
  });

  it('should be able to get default value for non existing translation', () => {
    expect(t.get('notation.test', 'Default value')).toBe('Default value');
  });

  it('should be able to get default value for non existing translation with attrs', () => {
    expect(t.get('notation.test', { name: 'Zlatko'}, 'Default value {$name}')).toBe('Default value Zlatko');
  });

  it('should be not able to get null', () => {
    expect(t.get(null)).toBe(undefined);
  });

  it('should not be able to get empty variable', () => {
    expect(t.get('emptyVariable')).toBe('This is empty {} variable');
  });

  it('should not be able to get empty variable', () => {
    expect(t.get('emptyExternalVariable')).toBe('This is empty {$} external variable');
  });

  it('should be able to pass ICU test', () => {
    expect(t.get('ICU', {
      gender_of_host: 'male',
      num_guests: 3,
      host: 'Zlatko',
      guest: 'Livia',
    })).toBe('Zlatko invites Livia and 2 other people to his party.');
  });

  it('should not be able to translate plural without pairs', () => {
    expect(t.get('pluralWithoutPairs')).toBe('');
  });

  it('should not be able to translate select without pairs', () => {
    expect(t.get('selectWithoutPairs')).toBe('');
  });

  it('should not be able to translate bad translation', () => {
    expect(t.get('badTranslation')).toBe(undefined);
  });

  it('should be able to use own filter', () => {
    function test() {
      return 'test';
    }

    t.setFilter('test', test);
    expect(t.get('customFilter')).toBe('This is test');
  });

  it('should be able to use trim', () => {
    expect(t.get('filter.trim', {
      value: '   text   ',
    })).toBe('Trim this text');

    expect(t.get('filter.trim2', {
      value: '   text   ',
    })).toBe('Trim this text');
  });

  it('should be able to use trunc', () => {
    expect(t.get('filter.trunc', {
      value: '123456789123456789',
    })).toBe('Trunc this 12345..');
  });

  it('should be able to use lowerCase', () => {
    expect(t.get('filter.lowerCase', {
      value: 'LoWERCASe',
    })).toBe('This is lowercase');
  });

  it('should be able to use upperCase', () => {
    expect(t.get('filter.upperCase', {
      value: 'upperCase',
    })).toBe('This is UPPERCASE');
  });

  it('should be able to load namespace', async () => {
    await t.loadNamespace('widget');
  });

  it('should be able to use namespace translation', () => {
    expect(t.get('widget.test')).toBe('widget test');
  });

  it('should be able to init default adapter with data', async () => {
    const translate = new Translate({
      data: {
        sk: {
          test: '123',
        },
      },
    });

    await translate.setLocale('sk');

    expect(translate.get('test')).toBe('123');
  });

  it('should be able to use ICU mode', async () => {
    const t = new Translate({
      mode: Mode.ICU,
      data: {
        sk: {
          icu: 'ICU',
          test: 'Hello {name} {$icu}',
        },
      },
    });

    await t.setLocale('sk');

    expect(t.get('test', {
      name: 'Zlatko',
    })).toBe('Hello Zlatko ICU');
  });

  it('should be able to translate whole object', () => {
    const result = t.get({
      first: 'name',
      second: 'about',
    }, {
      lastName: 'Fedor',
    });

    expect(result.first).toBe('Zlatko Fedor');
    expect(result.second).toBe('About Zlatkove');
  });

  it('should be able to get translation by function', () => {
    function getLastName() {
      return 'Fedor';
    }

    expect(t.get('name', {
      lastName: getLastName,
    })).toBe('Zlatko Fedor');
  });

  it('should be able to get complex translation by function', () => {
    const user = {
      _lastName: 'Fedor',

      lastName: function() {
        return this._lastName;
      },
    };

    expect(user.lastName()).toBe('Fedor');

    expect(t.get('nameFn', { user })).toBe('Zlatko Fedor');
  });

  it('should be able to use correct plural', async () => {
    const t = new Translate({
      data: {
        en_US: {
          test: `{$count, plural,
            one {# item}
            few {# bug}
            =7  {# seven}
            =3  {# three}
                {# items}
          }`,
        },
        sk_SK: {
          test: `{$count, plural,
            one {# polozka}
            few {# polozky}
            =7  {# sedem}
            =3  {# tri}
                {# poloziek}
          }`,
        },
      },
    });

    await t.setLocale('sk_SK');
    expect(t.get('test', { count: 0 })).toBe('0 poloziek');
    expect(t.get('test', { count: 1 })).toBe('1 polozka');
    expect(t.get('test', { count: 2 })).toBe('2 polozky');
    expect(t.get('test', { count: 6 })).toBe('6 poloziek');
    expect(t.get('test', { count: 7 })).toBe('7 sedem');
    expect(t.get('test', { count: 3 })).toBe('3 tri');

    await t.setLocale('en_US');
    expect(t.get('test', { count: 0 })).toBe('0 items');
    expect(t.get('test', { count: 1 })).toBe('1 item');
    expect(t.get('test', { count: 2 })).toBe('2 items');
    expect(t.get('test', { count: 6 })).toBe('6 items');
    expect(t.get('test', { count: 7 })).toBe('7 seven');
    expect(t.get('test', { count: 3 })).toBe('3 three');
  });
});

describe('Catch event', () => {
  it('should be able to catch missing event', (done) => {
    const tt = new Translate();
    tt.once('missing', () => done());

    tt.get('missing.translate.path');
  });

  it('should be able to catch error event', (done) => {
    const tt = new Translate({
      data: {
        sk: {
          badText: 'bad { omg',
        },
      },
    });

    tt.once('err', () => done());

    tt.setLocale('sk').then(() => {
      tt.get('badText');
    });
  });

  it('should be able to catch missingdefault event', (done) => {
    const tt = new Translate({
      data: {
        sk: {
          badText: 'bad { omg',
        },
      },
    });

    tt.once('missingdefault', (path) => {
      expect(path).toBe('badText');
      done();
    });

    tt.setLocale('sk').then(() => {
      tt.get('badText');
    });
  });
});

describe('Dummy cache', () => {
  let cache = null;
  let t = null;

  it('should be able to create instance', () => {
    cache = new DummyCache();
  });

  it('should be able to use cache', async () => {
    t = new Translate({
      cache,
      data: {
        sk: {
          test: '123',
        },
        en: {
          test: '222',
        },
      },
    });

    await t.setLocale('sk');

    expect(t.get('test')).toBe('123');
    expect(t.get('test')).toBe('123');
  });

  it('should be able to change locale', async () => {
    await t.setLocale('en');
    expect(t.get('test')).toBe('222');
    expect(t.get('test')).toBe('222');
  });

  it('should be able to use dehydrate', () => {
    const cache = t.getCache();
    const data = cache.dehydrate();

    expect(data).toBe(undefined);
  });

  it('should be able to use rehydrate', () => {
    const cache = t.getCache();
    cache.rehydrate({});
  });
});

describe('Memory cache', () => {
  let cache = null;
  let t = null;

  it('should be able to create instance', () => {
    cache = new MemoryCache();
  });

  it('should be able to use cache', async () => {
    t = new Translate({
      cache,
      data: {
        sk: {
          test: '123',
        },
        en: {
          test: '222',
        },
      },
    });

    await t.setLocale('sk');

    expect(t.get('test')).toBe('123');
    expect(t.get('test')).toBe('123');
  });

  it('should be able to change locale', async () => {
    await t.setLocale('en');

    expect(t.get('test')).toBe('222');
    expect(t.get('test')).toBe('222');
  });

  it('should be able to use dehydrate and rehydrate', () => {
    const cache = t.getCache();
    const data = cache.dehydrate();

    expect(data).not.toBe(undefined);
    expect(data['222']).not.toBe(undefined);

    cache.rehydrate(data);

    expect(t.get('test')).toBe('222');
    expect(t.get('test')).toBe('222');
  });

  it('should be able to use cache', () => {
    const t = new Translate();

    t.set({
      en_US: {
        menu: {
          title: 'Welcome!',
        },
      },
      de_DE: {
        menu: {
          title: 'Willkommen!',
        },
      },
    });

    const translated = t.get('de_DE.menu.title');
    expect(translated).toBe('Willkommen!');
  });
});

describe('Async namespaces', () => {
  it('should be able to create instance', async () => {
    const t = new Translate({
      adapter: new FileAdapter({
        path: `${__dirname}/locales`,
        getData,
      }),
    });

    t.setLocale('en_US');

    await t.setLocale('en_US', 'widget');

    expect(t.get('widget.test')).toBe('widget test');
  });

  it('should be able to change locale', async () => {
    const t = new Translate({
      adapter: new FileAdapter({
        path: `${__dirname}/locales`,
        getData,
      }),
    });

    t.setLocale('en_US');
    t.setLocale('en_US', 'widget');
    t.setLocale('sk_SK');

    await t.setLocale('sk_SK', 'widget');

    expect(t.get('widget.test')).toBe('widget test sk');
  });

  it('should be able to use loadNamespace', async () => {
    const t = new Translate({
      adapter: new FileAdapter({
        path: `${__dirname}/locales`,
        getData,
      }),
    });

    t.setLocale('en_US');

    await t.loadNamespace('widget');

    expect(t.get('widget.test')).toBe('widget test');
  });

  it('should be able to change locale', async () => {
    const t = new Translate({
      adapter: new FileAdapter({
        path: `${__dirname}/locales`,
        getData,
      }),
    });

    t.setLocale('en_US');
    t.loadNamespace('widget');
    t.setLocale('sk_SK');

    await t.loadNamespace('widget');

    expect(t.get('widget.test')).toBe('widget test sk');
  });
});
