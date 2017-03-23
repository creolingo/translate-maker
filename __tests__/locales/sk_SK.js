import { Gender, Plural } from '../../src';

export default {
  name: 'Zlatko {$lastName}', // external variable
  about: 'O { nameComplex.short.possessive }', // text with local nested variable,
  aboutDefault: 'O {  nameComplex   }', // text with local variable "name",
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
  gender: `{$gender, select, male {boy} female {girl}}`,
  working: `{$user1.gender, select,
    male {Boy}
    female {Girl}
  } {$user1.name} working with {$user2.gender, select,
    male   {boy}
    female {girl}
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
  selectWithoutPairs: `{$count, select, 5, 6, 7}`,
  filter: {
    trim: 'Trim this {$value | trim}',
    trim2: 'Trim this {$value, trim}',
    trunc: `Trunc this {$value | truncate, 7, '..'}`,
    upperCase: 'This is {$value | upperCase }',
    lowerCase: 'This is {$value | lowerCase }',
  },
  nameFn: 'Zlatko {$user.lastName}', // external variable
  ordinal: `Take the {$position, ordinal,
    one {#st}
    two {#nd}
    few {#rd}
        {#th}
  } right`,
};
