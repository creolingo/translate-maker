import should from 'should';
import Translate, { Plural } from '../src';
import keymirror from 'keymirror';

const Gender = keymirror({
  MALE: null,
  FEMALE: null,
  OTHER: null,
});

describe('Translate', () => {
  let t = null;

  it('should be able to create instance', function(done) {
    t = new Translate({
      locale: 'sk_SK',
    });
    done();
  });

  it('set simple translation property', () => {
    t.set('varName', 'Adam');
    t.set('varName', 'Peter');
  });

  it('set complex translation properties', () => {
    t.set({
      name: 'Zlatko {$lastName}', // external variable
      about: 'About { nameComplex.short.possessive }', // text with local nested variable,
      aboutDefault: 'About {  nameComplex   }', // text with local variable "name",
      nameComplex: { // nested object
        _short: {
          objective: 'Zlatko', // default value
          _subjective: 'Zlatik',
          possessive: 'Zlatkove',
        },
        long: 'Zlatko Fedor',
      },
      user: {
        crashedByGender: `{$gender, select,
          ${Gender.MALE} {spadol}
          ${Gender.FEMALE} {spadla}
          ${Gender.OTHER} {spadol/a}
        }`,
        crashed: `{$user1.firstName} {user.crashedByGender, $user1.gender as gender} a {$user2.firstName} {user.crashedByGender, $user2.gender as gender}`,
      },
      dayparts: {
        _morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
      },
      emptyVariable: 'This is empty \\{\\} variable',
      emptyExternalVariable: 'This is empty \\{$\\} external variable',
      'dot.notation.test': 'Hello dot notation {$name}',
      greeting: 'Good {dayparts.$daypart} {$user.firstName}',
      escaped: 'Good \\{dayparts.$daypartVariant\\} \\{$user.firstName\\}',
      gender: `{$gender, select, MALE {boy} FEMALE {girl}}`,
      working: `{$user1.gender, select,
        MALE {Boy}
        FEMALE {Girl}
      } {$user1.name} working with {$user2.gender, select,
        MALE   {boy}
        FEMALE {girl}
               {boy or girl named}
      } {$user2.name}`,
      working2: `{gender, $user1.gender as gender | capitalize} {$user1.name} working with {gender, $user2.gender as gender} {$user2.name}`,

      followers: `{$user.name} has {$user.followers, plural,
        ${Plural.ZERO} {no followers}
        ${Plural.ONE} {{$user.followers} follower}
        ${Plural.OTHER} {{$user.followers} followers}
      }`,

      followersSmart: `{$user.name} has {$user.followers, plural,
        =0 {no followers}
        =1 {# follower}
           {# followers}
      }`,
      ICU: `{$gender_of_host, select,
        female {{$num_guests, plural, offset:1
            =0 {{$host} does not give a party.}
            =1 {{$host} invites {$guest} to her party.}
            =2 {{$host} invites {$guest} and one other person to her party.}
            other {{$host} invites {$guest} and # other people to her party.}}}
        male {{$num_guests, plural, offset:1
            =0 {{$host} does not give a party.}
            =1 {{$host} invites {$guest} to his party.}
            =2 {{$host} invites {$guest} and one other person to his party.}
            other {{$host} invites {$guest} and # other people to his party.}}}
        other {{$num_guests, plural, offset:1
            =0 {{$host} does not give a party.}
            =1 {{$host} invites {$guest} to their party.}
            =2 {{$host} invites {$guest} and one other person to their party.}
            other {{$host} invites {$guest} and # other people to their party.}
          }
        }
      }`,
      pluralWithoutPairs: `{$count, plural, 5, 6, 7}`,
      badTranslation: `{this is very bad`,
      customFilter: 'This is {$name | test}',
      selectWithoutPairs: `{$count, select, 5, 6, 7}`
    });
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
        gender: 'MALE',
        name: 'Zlatko',
      },
      user2: {
        gender: 'FEMALE',
        name: 'Livia',
      }
    }).should.equal('Boy Zlatko working with girl Livia');

    t.get('working', {
      user1: {
        gender: 'MALE',
        name: 'Zlatko',
      },
      user2: {
        name: 'Livia',
      }
    }).should.equal('Boy Zlatko working with boy or girl named Livia');

    t.get('working2', {
      user1: {
        gender: 'MALE',
        name: 'Zlatko',
      },
      user2: {
        gender: 'FEMALE',
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
    should(t.get('notation.test')).equal(void 0);
  });

  it('should be not able to get non existing translation', () => {
    should(t.get('dot.notation.testNonExist')).equal(void 0);
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
});
