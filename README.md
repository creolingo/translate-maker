# Translate Maker

Universal translation library. This module is core of the www.translatemaker.com

# Installation

Install via npm.

```sh
npm install translate-maker
```

# Features

- Nested and reference translations
- Variables
- Conditioned translations (Plurals, Gender etc...)
- Default translations


# Usage

### Basic

```js
import Translate from 'translate-maker';

const t = new Translate();

// add new translation named greeting
t.set('greeting', 'Good morning');

// get translation by key greeting
const result = t.get('greeting');
console.log(result); // => Good morning
```

### Basic set with JSON

You can set translation by (key, value) or like an object
```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  greeting: 'Good morning'
});

const result = t.get('greeting');
console.log(result); // => Good morning
```

### Basic get with object notation

Each translation is available with object notation.
```js
import Translate from 'translate-maker';

const t = new Translate();
t.set('greeting', 'Good morning');

const result = t.greeting.get();
console.log(result); // => Good morning
```

### Reference translation

You can reference other translations in a string by using the brace syntax { name }.
```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  morning: 'morning',
  greeting: 'Good {morning}'
});

const result = t.get('greeting');
console.log(result); // => Good morning

// you can use object notation
const result2 = t.greeting.get();
console.log(result2); // => Good morning
```

### Multiple variants

You can reference other translations in a string by using the brace syntax { name }.
```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  dayparts: {
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening'
  },
  greeting: {
    morning: 'Good {dayparts.morning}',
    afternoon: 'Good {dayparts.afternoon}',
    evening: 'Good {dayparts.evening}'
  }
});

const result = t.get('greeting.afternoon');
console.log(result); // => Good afternoon

// you can use object notation
const result2 = t.greeting.evening.get();
console.log(result2); // => Good evening
```

### Default variants

You can set one variant as default with underscore "_" at the begining.
```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  dayparts: {
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening'
  },
  greeting: {
    _morning: 'Good {dayparts.morning}',
    afternoon: 'Good {dayparts.afternoon}',
    evening: 'Good {dayparts.evening}'
  }
});

const result = t.get('greeting');
console.log(result); // => Good morning

// you can use object notation
const result2 = t.greeting.get();
console.log(result2); // => Good morning
```

### Default variants for references

You can set default variant for reference too.
```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  dayparts: {
    _morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening'
  },
  greeting: {
    _morning: 'Good {dayparts}',
    afternoon: 'Good {dayparts.afternoon}',
    evening: 'Good {dayparts.evening}'
  }
});

const result = t.get('greeting');
console.log(result); // => Good morning

// you can use object notation
const result2 = t.greeting.get();
console.log(result2); // => Good morning
```

### External variables

You can use your own variables from your code. To reference a variable, use the dollar syntax.

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  dayparts: {
    _morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening'
  },
  greeting: {
    _morning: 'Good {dayparts} {$name}',
    afternoon: 'Good {dayparts.afternoon} {$name}',
    evening: 'Good {dayparts.evening} {$name}'
  }
});

const result = t.get('greeting', {
  name: 'Zlatko'
});
console.log(result); // => Good morning Zlatko

// you can use object notation
const result2 = t.greeting.evening.get({
  name: 'Zlatko'
});
console.log(result2); // => Good evening Zlatko
```

### JSON and External variables

You can use JSON structure as well

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  dayparts: {
    _morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening'
  },
  greeting: {
    _morning: 'Good {dayparts} {$user.name}',
    afternoon: 'Good {dayparts.afternoon} {$user.name}',
    evening: 'Good {dayparts.evening} {$user.name}'
  }
});

const result = t.get('greeting', {
  user: {
    name: 'Zlatko'
  }
});
console.log(result); // => Good morning Zlatko

// you can use object notation
const result2 = t.greeting.evening.get({
  user: {
    name: 'Zlatko'
  }
});
console.log(result2); // => Good evening Zlatko
```


### Combination external variables and references

You can use JSON structure as well

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  dayparts: {
    _morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening'
  },
  greeting: 'Good {dayparts.$daypartVariant} {$user.name}',
});

const result = t.get('greeting', {
  daypartVariant: 'afternoon',
  user: {
    name: 'Zlatko'
  }
});
console.log(result); // => Good afternoon Zlatko

// you can use object notation
const result2 = t.greeting.get({
  daypartVariant: 'evening',
  user: {
    name: 'Zlatko'
  }
});
console.log(result2); // => Good evening Zlatko
```

### Escape variable notation

If you want to escape {name} use \{name}

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  dayparts: {
    _morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening'
  },
  greeting: 'Good \\{dayparts.$daypartVariant} \\{$user.name}',
});

const result = t.get('greeting', {
  daypartVariant: 'afternoon',
  user: {
    name: 'Zlatko'
  }
});
console.log(result); // => Good {dayparts.$daypartVariant} {$user.name}
```

### Conditional translation

Sometimes you want to show different translation based on Gender, Plural, Tense or other enumerable variables.
The logic is equivalent to the IF statement. The main difference is that you need to use array.
Default option is option without variables. You can use number of variables as you want (In gender example we are using two external variables).

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  run: [{
    $tense: 'PAST',
    value: '{$name} ran'
  }, {
    $tense: 'FUTURE',
    value: {$name} will run,
  }, {
    value: '{$name} is running'
  }],
});

const result = t.get('run', {
  tense: 'FUTURE',
  name: 'Zlatko',
});
console.log(result); // => Zlatko will run
```

We can rewrite our greeting example too. The decision which version is better is up to you.

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  greeting: [{
    value: 'Good morning {$user.name}'
  }, {
    $daypart: 'AFTERNOON',
    value: 'Good afternoon {$user.name}'
  }, {
    $daypart: 'EVENING',
    value: 'Good evening {$user.name}'
  }],
});

const result = t.get('greeting', {
  user: {
    name: 'Zlatko'
  }
});
console.log(result); // => Good morning Zlatko

const result = t.get('greeting', {
  daypart: 'EVENING',
  user: {
    name: 'Zlatko'
  }
});
console.log(result); // => Good evening Zlatko
```

### Gender example

Here is little bit complex gender example where is translation based on two external variables.

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  working: [{
    '$user1.gender': 'MALE',
    '$user2.gender': 'MALE',
    value: 'Boy {$user1.name} working with boy {$user2.name}'
  }, {
    '$user1.gender': 'MALE',
    '$user2.gender': 'FEMALE',
    value: 'Boy {$user1.name} working with girl {$user2.name}'
  }, {
    '$user1.gender': 'FEMALE',
    '$user2.gender': 'MALE',
    value: 'Girl {$user1.name} working with boy {$user2.name}'
  }, {
    '$user1.gender': 'FEMALE',
    '$user2.gender': 'FEMALE',
    value: 'Girl {$user1.name} working with girl {$user2.name}'
  }, {
    value: '{$user1.name} working with {$user2.name}'
  }]
});

const result = t.get('working', {
  user1: {
    gender: 'MALE',
    name: 'Zlatko'
  },
  user2: {
    gender: 'FEMALE',
    name: 'Livia'
  }
});
console.log(result); // => Boy Zlatko working with girl Livia
```

### Plural example

For this task you can use conditional translations as well. As you can see in the example below there is built in function name plural which is inside instance of the Translate. Maybe you are asking why you need to use function outside of the translation. This question has simple answer: flexibility. That mean you can use what do you want without any borders. Translate has only one build in method which is "plural" and it is depends on the current translation locale.

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  followers: [{
    $plural: 'ZERO',
    value: '{$user.name} has no followers'
  }, {
    $plural: 'ONE',
    value: '{$user.name} has {$user.followers} follower'
  }, {
    $plural: 'MORE',
    value: '{$user.name} has {$user.followers} followers'
  }]
});

const user = {
  name: 'Zlatko',
  followers: 15,
};

const result = t.get('working', {
  plural: t.plural(user.followers),
  user: user
});
console.log(result); // => Zlatko has 15 followers
```

Plural function is using module CLDR which can have one of these values based on your current locale:
```js
['ZERO', 'ONE', 'TWO', 'FEW', 'MANY', 'OTHER']
```

You can use predefined Plural constant instead of String representation

import Translate, { Plural } from 'translate-maker';

const t = new Translate();
t.set({
  followers: [{
    $plural: Plural.ZERO,
    value: '{$user.name} has no followers'
  }, {
    $plural: Plural.ONE,
    value: '{$user.name} has {$user.followers} follower'
  }, {
    $plural: Plural.MORE,
    value: '{$user.name} has {$user.followers} followers'
  }]
});
```

You can use predefined Gender constant instead of String representation

import Translate, { Gender } from 'translate-maker';

const t = new Translate();
t.set({
  followers: [{
    $gender: Gender.MALE,
    value: 'He is nice'
  }, {
    $gender: Gender.FEMALE,
    value: 'She is nice'
  }, {
    $gender: Gender.OTHER,
    value: 'He/She is nice'
  }]
});
```

# Running Tests

To run the test suite, first invoke the following command within the repo, installing the development dependencies:

```sh
npm install
```

Then run the tests:

```sh
npm test
```

