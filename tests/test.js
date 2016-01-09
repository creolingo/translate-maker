import should from 'should';
import Translate, { Plural, Gender, Adapters, Caches, Mode } from '../src';
import keymirror from 'keymirror';

describe('Translate', () => {
  let t = null;

  it('should be able to create instance', (done) => {
    t = new Translate({
      adapter: new Adapters.File({
        path: __dirname + '/locales',
      }),
    }, done);
  });

  it('should be able to load locale', (done) => {
    t.setLocale('sk_SK', done);
  });

  it('set simple translation property', () => {
    t.set('varName', 'Adam');
    t.set('varName', 'Peter');
  });

  it('get simple translation with variable', () => {
    t.get('name', { lastName: 'Fedor'}).should.equal('Zlatko Fedor');
  });

  it('get simple translation with variable by object', () => {
    t.name.get({ lastName: 'Fedor'}).should.equal('Zlatko Fedor');
  });

  it('get simple translation with complex variable', () => {
    t.get('nameComplex.long').should.equal('Zlatko Fedor');
  });

  it('get simple translation with complex variable by object', () => {
    t.nameComplex.long.get().should.equal('Zlatko Fedor');
  });

  it('get simple translation with default complex variable', () => {
    t.get('nameComplex.short').should.equal('Zlatik');
  });

  it('get simple translation with default complex variable by object', () => {
    t.nameComplex.short.get().should.equal('Zlatik');
  });

  it('get simple translation with local translation', () => {
    t.get('about').should.equal('About Zlatkove');
  });

  it('get simple translation with local translation by object', () => {
    t.about.get().should.equal('About Zlatkove');
  });

  it('get simple translation with default local translation', () => {
    t.get('aboutDefault').should.equal('About Zlatik');
  });

  it('get simple translation with default local translation by object', () => {
    t.aboutDefault.get().should.equal('About Zlatik');
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
    t.greeting.get({
      daypart: 'evening',
      user: {
        firstName: 'Zlatko',
      },
    }).should.equal('Good evening Zlatko');
  });

  it('should be able to escape variable notation', () => {
    t.escaped.get().should.equal('Good {dayparts.$daypartVariant} {$user.firstName}');
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
    t.dot.notation.test.get({
      name: 'Zlatko',
    }).should.equal('Hello dot notation Zlatko');
  });

  it('should be able to use plural', () => {
    const user = {
      name: 'Zlatko',
      followers: 15,
    };

    t.followers.get({
      user,
    }).should.equal('Zlatko has 15 followers');
  });

  it('should be able to use plural with smart variable', () => {
    const user = {
      name: 'Zlatko',
      followers: 15,
    };

    t.followersSmart.get({
      user,
    }).should.equal('Zlatko has 15 followers');

    t.followersSmart.get({
      user: {
        name: 'Zlatko',
        followers: 1,
      },
    }).should.equal('Zlatko has 1 follower');
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
    should(t.get(null)).equal(void 0);
  });

  it('should be able to get translation by toString', () => {
    (t.nameComplex + '').should.equal('Zlatik');
  });

  it('should not be able to get empty variable', () => {
    should(t.get('emptyVariable')).equal('This is empty {} variable');
  });

  it('should not be able to get empty variable', () => {
    should(t.get('emptyExternalVariable')).equal('This is empty {$} external variable');
  });

  it('should be able to pass ICU test', () => {
    t.ICU.get({
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

  it('should be able to load namespace', (done) => {
    t.load('widget', done);
  });

  it('should be able to use namespace translation', () => {
    should(t.widget.test.get()).equal('widget test');
  });

  it('should be able to init default adapter with data', (done) => {
    const t = new Translate({
      locale: 'sk',
      adapter: {
        sk: {
          test: '123',
        }
      },
    }, (err , translate) => {
      if (err) {
        throw err;
      }

      translate.test.get().should.equal('123');
      done();
    });
  });

  it('should be able to use ICU mode', (done) => {
    const t = new Translate({
      mode: Mode.ICU,
      locale: 'sk',
      adapter: {
        sk: {
          icu: 'ICU',
          test: 'Hello {name} {$icu}',
        }
      },
    }, (err , translate) => {
      if (err) {
        throw err;
      }

      translate.test.get({
        name: 'Zlatko'
      }).should.equal('Hello Zlatko ICU');
      done();
    });
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

    (t.name.get({
      lastName: getLastName,
    })).should.equal('Zlatko Fedor');
  });

  it('should be able to get complex translation by function', () => {
    const user = {
      _lastName: 'Fedor',

      lastName: function() {
        return this._lastName;
      }
    };

    user.lastName().should.equal('Fedor');

    (t.nameFn.get({ user })).should.equal('Zlatko Fedor');
  });

  it('should be able to use correct plural', (done) => {
    const t = new Translate({
      locale: 'sk_SK',
      adapter: {
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
    }, (err , translate) => {
      if (err) {
        throw err;
      }

      translate.test.get({ count: 0 }).should.equal('0 poloziek');
      translate.test.get({ count: 1 }).should.equal('1 polozka');
      translate.test.get({ count: 2 }).should.equal('2 polozky');
      translate.test.get({ count: 6 }).should.equal('6 poloziek');
      translate.test.get({ count: 7 }).should.equal('7 sedem');
      translate.test.get({ count: 3 }).should.equal('3 tri');

      translate.setLocale('en_US', () => {
        translate.test.get({ count: 0 }).should.equal('0 items');
        translate.test.get({ count: 1 }).should.equal('1 item');
        translate.test.get({ count: 2 }).should.equal('2 items');
        translate.test.get({ count: 6 }).should.equal('6 items');
        translate.test.get({ count: 7 }).should.equal('7 seven');
        translate.test.get({ count: 3 }).should.equal('3 three');
        done();
      });

    });
  });
});

describe('Catch event', () => {
  it('should be able to catch missing event', (done) => {
    const tt = new Translate({}, (err, translate) => {
      if (err) {
        throw err;
      }

      translate.once('missing', () => done());

      translate.get('missing.translate.path');
    });
  });

  it('should be able to catch error event', (done) => {
    const tt = new Translate({
      locale: 'sk',
      adapter: {
        sk: {
          badText: 'bad { omg',
        },
      },
    }, (err, translate) => {
      if (err) {
        throw err;
      }

      translate.once('err', () => done());
      translate.get('badText');
    });
  });

  it('should be able to catch missingdefault event', (done) => {
    const tt = new Translate({
      locale: 'sk',
      adapter: {
        sk: {
          badText: 'bad { omg',
        },
      },
    }, (err, translate) => {
      if (err) {
        throw err;
      }

      translate.once('missingdefault', (path) => {
        path.should.equal('badText');
        done();
      });
      translate.get('badText');
    });
  });
});

describe('Dummy cache', () => {
  let cache = null;
  let t = null;

  it('should be able to create instance', () => {
    cache = new Caches.Dummy({});
  });

  it('should be able to use cache', (done) => {
    t = new Translate({
      cache,
      locale: 'sk',
      adapter: {
        sk: {
          test: '123',
        },
        en: {
          test: '222',
        }
      }
    }, (err, translate) => {
      if (err) {
        throw err;
      }

      translate.test.get().should.equal('123');
      translate.test.get().should.equal('123');

      done();
    });
  });

  it('should be able to change locale', (done) => {
    t.setLocale('en', (err) => {
      if (err) throw err;

      t.test.get().should.equal('222');
      t.test.get().should.equal('222');

      done();
    });
  });

  it('should be able to use dehydrate', () => {
    const cache = t.getCache();
    const data = cache.dehydrate();

    should(data).equal(void 0);
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
    cache = new Caches.Memory({});
  });

  it('should be able to use cache', (done) => {
    t = new Translate({
      cache,
      locale: 'sk',
      adapter: {
        sk: {
          test: '123',
        },
        en: {
          test: '222',
        }
      }
    }, (err, translate) => {
      if (err) {
        throw err;
      }

      translate.test.get().should.equal('123');
      translate.test.get().should.equal('123');

      done();
    });
  });

  it('should be able to change locale', (done) => {
    t.setLocale('en', (err) => {
      if (err) throw err;

      t.test.get().should.equal('222');
      t.test.get().should.equal('222');

      done();
    });
  });

  it('should be able to use dehydrate and rehydrate', () => {
    const cache = t.getCache();
    const data = cache.dehydrate();

    should(data).not.equal(void 0);
    data['222'].should.not.equal(void 0);

    cache.rehydrate(data);

    t.test.get().should.equal('222');
    t.test.get().should.equal('222');
  });
});
