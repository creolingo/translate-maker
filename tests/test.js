import should from 'should';
import Translate from '../src';
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
        crashed: [{
          '$user1.gender': Gender.MALE,
          '$user2.gender': Gender.FEMALE,
          value: '{$user1.firstName} spadol a {$user2.firstName} spadla',
        }, '{$user1.firstName} spadol/a a {$user2.firstName} spadol/a'],
      },
      dayparts: {
        _morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
      },
      'dot.notation.test': 'Hello dot notation {$name}',
      greeting: 'Good {dayparts.$daypart} {$user.firstName}',
      escaped: 'Good \\{dayparts.$daypartVariant} \\{$user.firstName}',
      working: [{
        '$user1.gender': 'MALE',
        '$user2.gender': 'MALE',
        value: 'Boy {$user1.name} working with boy {$user2.name}',
      }, {
        '$user1.gender': 'MALE',
        '$user2.gender': 'FEMALE',
        value: 'Boy {$user1.name} working with girl {$user2.name}',
      }, {
        '$user1.gender': 'FEMALE',
        '$user2.gender': 'MALE',
        value: 'Girl {$user1.name} working with boy {$user2.name}',
      }, {
        '$user1.gender': 'FEMALE',
        '$user2.gender': 'FEMALE',
        value: 'Girl {$user1.name} working with girl {$user2.name}',
      }, {
        value: '{$user1.name} working with {$user2.name}'
      }],
    });
  });
/*
  it('get simple translation', () => {
    translation.get('varName').should.equal('Peter');
  });

  it('get simple translation by object', () => {
    translation.varName.get().should.equal('Peter');
  });*/

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
  });

  it('should be able to get translation by dot notation', () => {
    t.dot.notation.test.get({
      name: 'Zlatko',
    }).should.equal('Hello dot notation Zlatko');
  });
});
