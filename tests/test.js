import should from 'should';
import { Translation } from '../src';
import keymirror from 'keymirror';

const Gender = keymirror({
  MALE: null,
  FEMALE: null,
  OTHER: null,
});

describe('Translation', () => {
  let translation = null;

  it('should be able to create instance', function(done) {
    translation = new Translation();
    done();
  });

  it('set simple translation property', () => {
    translation.set('varName', 'Adam');
    translation.set('varName', 'Peter');
  });

  it('set complex translation properties', () => {
    translation.set({
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
      }
    });
  });

  it('get simple translation', () => {
    translation.get('varName').should.equal('Peter');
  });

  it('get simple translation by object', () => {
    translation.varName.get().should.equal('Peter');
  });

  it('get simple translation with variable', () => {
    translation.get('name', { lastName: 'Fedor'}).should.equal('Zlatko Fedor');
  });

  it('get simple translation with variable by object', () => {
    translation.name.get({ lastName: 'Fedor'}).should.equal('Zlatko Fedor');
  });

  it('get simple translation with complex variable', () => {
    translation.get('nameComplex.long').should.equal('Zlatko Fedor');
  });

  it('get simple translation with complex variable by object', () => {
    translation.nameComplex.long.get().should.equal('Zlatko Fedor');
  });

  it('get simple translation with default complex variable', () => {
    translation.get('nameComplex.short').should.equal('Zlatik');
  });

  it('get simple translation with default complex variable by object', () => {
    translation.nameComplex.short.get().should.equal('Zlatik');
  });

  it('get simple translation with local translation', () => {
    translation.get('about').should.equal('About Zlatkove');
  });

  it('get simple translation with local translation by object', () => {
    translation.about.get().should.equal('About Zlatkove');
  });

  it('get simple translation with default local translation', () => {
    translation.get('aboutDefault').should.equal('About Zlatik');
  });

  it('get simple translation with default local translation by object', () => {
    translation.aboutDefault.get().should.equal('About Zlatik');
  });

  it('get array translation', () => {
    translation.get('user.crashed', {
      user1: {
        gender: Gender.MALE,
        firstName: 'Adam',
      },
      user2: {
        firstName: 'Lisa',
        gender: Gender.FEMALE,
      }
    }).should.equal('Adam spadol a Lisa spadla');
  });
});
