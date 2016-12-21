import should from 'should';
import Translate, {
  Plural,
  Gender,
  FileAdapter,
  MemoryAdapter,
  Caches,
  Mode,
  DummyCache,
  MemoryCache,
} from '../src';
import keymirror from 'keymirror';

async function getData(path) {
  const file = require(path);
  return file && file.default ? file.default : file;
}

describe('Translate', () => {
  let t = null;

  it('should be able to create instance', () => {
    t = new Translate({
      adapter: new FileAdapter({
        path: __dirname + '/locales',
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
    t.get('name', { lastName: 'Fedor'}).should.equal('Zlatko Fedor');
  });

  it('get simple translation with complex variable', () => {
    t.get('nameComplex.long').should.equal('Zlatko Fedor');
  });

  it('get simple translation with default complex variable', () => {
    t.get('nameComplex.short').should.equal('Zlatik');
  });

  it('get simple translation with local translation', () => {
    t.get('about').should.equal('About Zlatkove');
  });

  it('get simple translation with default local translation', () => {
    t.get('aboutDefault').should.equal('About Zlatik');
  });

  it('get array translation', () => {
    t.get('user.crashed', {
      user1: {
        gender: Gender.MALE,
        firstName: 'Adam',
      },
      user2: {
        firstName: 'Lisa',
        gender: Gender.FEMALE,
      },
    }).should.equal('Adam spadol a Lisa spadla');
  });

  it('get translation with variable and reference', () => {
    t.get('greeting', {
      daypart: 'evening',
      user: {
        firstName: 'Zlatko',
      },
    }).should.equal('Good evening Zlatko');
  });

  it('should be able to escape variable notation', () => {
    t.get('escaped').should.equal('Good {dayparts.$daypartVariant} {$user.firstName}');
  });


  it('should be able to use conditioned translation with complex variables', () => {
    t.get('working', {
      user1: {
        gender: 'male',
        name: 'Zlatko',
      },
      user2: {
        gender: 'female',
        name: 'Livia',
      }
    }).should.equal('Boy Zlatko working with girl Livia');

    t.get('working', {
      user1: {
        gender: 'male',
        name: 'Zlatko',
      },
      user2: {
        name: 'Livia',
      }
    }).should.equal('Boy Zlatko working with boy or girl named Livia');

    t.get('working2', {
      user1: {
        gender: 'male',
        name: 'Zlatko',
      },
      user2: {
        gender: 'female',
        name: 'Livia',
      }
    }).should.equal('Boy Zlatko working with girl Livia');
  });

  it('should be able to get translation by dot notation', () => {
    t.get('dot.notation.test', {
      name: 'Zlatko',
    }).should.equal('Hello dot notation Zlatko');
  });

  it('should be able to use plural', () => {
    const user = {
      name: 'Zlatko',
      followers: 15,
    };

    t.get('followers', {
      user,
    }).should.equal('Zlatko has 15 followers');
  });

  it('should be able to use plural with smart variable', () => {
    const user = {
      name: 'Zlatko',
      followers: 15,
    };

    t.get('followersSmart', {
      user,
    }).should.equal('Zlatko has 15 followers');

    t.get('followersSmart', {
      user: {
        name: 'Zlatko',
        followers: 1,
      },
    }).should.equal('Zlatko has 1 follower');
  });

  it('should be able to use ordinal', () => {
    const user = {
      position: 15,
    };

    t.get('ordinal', {
      position: 1,
    }).should.equal('Take the 1st right');

    t.get('ordinal', {
      position: 2,
    }).should.equal('Take the 2nd right');

    t.get('ordinal', {
      position: 3,
    }).should.equal('Take the 3rd right');

    t.get('ordinal', {
      position: 4,
    }).should.equal('Take the 4th right');

    t.get('ordinal', {
      position: 11,
    }).should.equal('Take the 11th right');

    t.get('ordinal', {
      position: 21,
    }).should.equal('Take the 21st right');

    t.get('ordinal', {
      position: 22,
    }).should.equal('Take the 22nd right');

    t.get('ordinal', {
      position: 33,
    }).should.equal('Take the 33rd right');

    t.get('ordinal', {
      position: 44,
    }).should.equal('Take the 44th right');
  });


  it('should be not able to get non existing translation', () => {
    should(t.get('notation.test')).equal('Missing default translation for: notation.test');
  });

  it('should be not able to get non existing translation', () => {
    should(t.get('dot.notation.testNonExist')).equal('Missing default translation for: dot.notation.testNonExist');
  });

  it('should be able to get default value for non existing translation', () => {
    should(t.get('notation.test', 'Default value')).equal('Default value');
  });

  it('should be able to get default value for non existing translation with attrs', () => {
    should(t.get('notation.test', { name: 'Zlatko'}, 'Default value {$name}')).equal('Default value Zlatko');
  });

  it('should be not able to get null', () => {
    should(t.get(null)).equal(undefined);
  });

  it('should not be able to get empty variable', () => {
    should(t.get('emptyVariable')).equal('This is empty {} variable');
  });

  it('should not be able to get empty variable', () => {
    should(t.get('emptyExternalVariable')).equal('This is empty {$} external variable');
  });

  it('should be able to pass ICU test', () => {
    t.get('ICU', {
      gender_of_host: 'male',
      num_guests: 3,
      host: 'Zlatko',
      guest: 'Livia',
    }).should.equal('Zlatko invites Livia and 2 other people to his party.');
  });

  it('should not be able to translate plural without pairs', () => {
    should(t.get('pluralWithoutPairs')).equal('');
  });

  it('should not be able to translate select without pairs', () => {
    should(t.get('selectWithoutPairs')).equal('');
  });

  it('should not be able to translate bad translation', () => {
    should(t.get('badTranslation')).equal(void 0);
  });

  it('should be able to use own filter', () => {
    function test() {
      return 'test';
    }

    t.setFilter('test', test);
    should(t.get('customFilter')).equal('This is test');
  });

  it('should be able to use trim', () => {
    should(t.get('filter.trim', {
      value: '   text   ',
    })).equal('Trim this text');

    should(t.get('filter.trim2', {
      value: '   text   ',
    })).equal('Trim this text');
  });

  it('should be able to use trunc', () => {
    should(t.get('filter.trunc', {
      value: '123456789123456789',
    })).equal('Trunc this 12345..');
  });

  it('should be able to use lowerCase', () => {
    should(t.get('filter.lowerCase', {
      value: 'LoWERCASe',
    })).equal('This is lowercase');
  });

  it('should be able to use upperCase', () => {
    should(t.get('filter.upperCase', {
      value: 'upperCase',
    })).equal('This is UPPERCASE');
  });

  it('should be able to load namespace', async () => {
    await t.loadNamespace('widget');
  });

  it('should be able to use namespace translation', () => {
    should(t.get('widget.test')).equal('widget test');
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

    translate.get('test').should.equal('123');
  });

  it('should be able to use ICU mode', async () => {
    const t = new Translate({
      mode: Mode.ICU,
      data: {
        sk: {
          icu: 'ICU',
          test: 'Hello {name} {$icu}',
        }
      },
    });

    await t.setLocale('sk');

    t.get('test', {
      name: 'Zlatko'
    }).should.equal('Hello Zlatko ICU');
  });

  it('should be able to translate whole object', () => {
    const result = t.get({
      first: 'name',
      second: 'about',
    }, {
      lastName: 'Fedor'
    });

    result.first.should.equal('Zlatko Fedor');
    result.second.should.equal('About Zlatkove');
  });

  it('should be able to get translation by function', () => {
    function getLastName() {
      return 'Fedor';
    }

    t.get('name', {
      lastName: getLastName,
    }).should.equal('Zlatko Fedor');
  });

  it('should be able to get complex translation by function', () => {
    const user = {
      _lastName: 'Fedor',

      lastName: function() {
        return this._lastName;
      }
    };

    user.lastName().should.equal('Fedor');

    t.get('nameFn', { user }).should.equal('Zlatko Fedor');
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
        }
      },
    });

    await t.setLocale('sk_SK');
    t.get('test', { count: 0 }).should.equal('0 poloziek');
    t.get('test', { count: 1 }).should.equal('1 polozka');
    t.get('test', { count: 2 }).should.equal('2 polozky');
    t.get('test', { count: 6 }).should.equal('6 poloziek');
    t.get('test', { count: 7 }).should.equal('7 sedem');
    t.get('test', { count: 3 }).should.equal('3 tri');

    await t.setLocale('en_US');
    t.get('test', { count: 0 }).should.equal('0 items');
    t.get('test', { count: 1 }).should.equal('1 item');
    t.get('test', { count: 2 }).should.equal('2 items');
    t.get('test', { count: 6 }).should.equal('6 items');
    t.get('test', { count: 7 }).should.equal('7 seven');
    t.get('test', { count: 3 }).should.equal('3 three');
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
      path.should.equal('badText');
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
        }
      }
    });

    await t.setLocale('sk');

    t.get('test').should.equal('123');
    t.get('test').should.equal('123');
  });

  it('should be able to change locale', async () => {
    await t.setLocale('en');
    t.get('test').should.equal('222');
    t.get('test').should.equal('222');
  });

  it('should be able to use dehydrate', () => {
    const cache = t.getCache();
    const data = cache.dehydrate();

    should(data).equal(undefined);
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
        }
      }
    });

    await t.setLocale('sk');

    t.get('test').should.equal('123');
    t.get('test').should.equal('123');
  });

  it('should be able to change locale', async () => {
    await t.setLocale('en');

    t.get('test').should.equal('222');
    t.get('test').should.equal('222');
  });

  it('should be able to use dehydrate and rehydrate', () => {
    const cache = t.getCache();
    const data = cache.dehydrate();

    should(data).not.equal(undefined);
    data['222'].should.not.equal(undefined);

    cache.rehydrate(data);

    t.get('test').should.equal('222');
    t.get('test').should.equal('222');
  });

  it('should be able to use cache', () => {
    const t = new Translate();

    t.set({
        en_US: {
            menu: {
                title: "Welcome!"
            }
        },
        de_DE: {
            menu: {
                title: "Willkommen!"
            }
        }
    });

    const translated = t.get("de_DE.menu.title");
    translated.should.equal('Willkommen!');
  });
});
