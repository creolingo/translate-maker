# Translate Maker

Universal translation library. This module is core of the www.translatemaker.com

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

[npm-image]: https://img.shields.io/npm/v/translate-maker.svg?style=flat-square
[npm-url]: https://www.npmjs.com/CherrySoftware/translate-maker
[travis-image]: https://img.shields.io/travis/CherrySoftware/translate-maker/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/CherrySoftware/translate-maker
[coveralls-image]: https://img.shields.io/coveralls/CherrySoftware/translate-maker/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/CherrySoftware/translate-maker?branch=master


# Installation

Install via npm.

```sh
npm install translate-maker
```

# Features

- Build on standards ([ICU Message syntax](http://userguide.icu-project.org/formatparse/messages), [Unicode CLDR](http://cldr.unicode.org/))
- Support 190+ languages
- JSON Structure
- Nested and reference translations
- Variables
- Conditioned translations (Plural, Gender etc...)
- Filters capitalize, upperCase, lowerCase etc... and custom filters
- Default translations
- Integrates with [React](https://github.com/CherrySoftware/react-translate-maker) and [Angular](https://github.com/CherrySoftware/angular-translate-maker)

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

### External variables

You can use your own variables from your code. Use the dollar syntax { $name }.

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  greeting: 'Good morning {$name}'
});

const result = t.get('greeting', {
  name: 'Zlatko'
});
console.log(result); // => Good morning Zlatko

const result2 = t.greeting.get({
  name: 'Zlatko'
});
console.log(result2); // => Good morning Zlatko
```

### Nested external variables

Very often is your variable an object for example user can contains firstName and lastName etc...

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  greeting: 'Good morning {$user.firstName} {$user.lastName}'
});

const user = {
  firstName: 'Zlatko',
  lastName: 'Fedor'
};

const result = t.get('greeting', {
  user: user
});
console.log(result); // => Good morning Zlatko Fedor

const result2 = t.greeting.get({
  user: user
});
console.log(result2); // => Good morning Zlatko Fedor
```

### Reference translation

You can reference other translations in a string by using the brace syntax { name }. There is no dollar.

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  morning: 'morning',
  greeting: 'Good {morning} {$name}'
});

const result = t.get('greeting', {
  name: 'Zlatko'
});
console.log(result); // => Good morning Zlatko

// you can use object notation
const result2 = t.greeting.get({
  name: 'Zlatko'
});
console.log(result2); // => Good morning Zlatko
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
    morning: 'Good {dayparts.morning} {$name}',
    afternoon: 'Good {dayparts.afternoon} {$name}',
    evening: 'Good {dayparts.evening} {$name}'
  }
});

const result = t.get('greeting.afternoon', {
  name: 'Zlatko'
});
console.log(result); // => Good afternoon Zlatko

// you can use object notation
const result2 = t.greeting.evening.get({
  name: 'Zlatko'
});
console.log(result2); // => Good evening Zlatko
```

### Default variants

You can set one variant as default with underscore "_" at the beginning.
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

const user = {
  name: 'Zlatko'
};

const result = t.get('greeting', {
  daypartVariant: 'afternoon',
  user: user
});
console.log(result); // => Good afternoon Zlatko

// you can use object notation
const result2 = t.greeting.get({
  daypartVariant: 'evening',
  user: user
});
console.log(result2); // => Good evening Zlatko
```

### Escape variable notation

If you want to escape {name} use \{name\}

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  dayparts: {
    _morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening'
  },
  greeting: 'Good \\{dayparts.$daypartVariant\\} \\{$user.name\\}',
});

const user = {
  name: 'Zlatko'
};

const result = t.get('greeting', {
  daypartVariant: 'afternoon',
  user: user
});
console.log(result); // => Good {dayparts.$daypartVariant} {$user.name}
```

### Conditional translation

Sometimes you want to show different translation based on Gender or Tense or other enumerable variables.
The logic is equivalent to the IF statement. Default option is option without variables. You can use number of variables as you want. In next example we are using variables "past", "future" and default value.

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  run: `{$user.name} {$tense, select,
    past   {ran}
    future {will run}
           {is running}
  }`
});

const user = {
  name: 'Zlatko'
};

const result = t.get('run', {
  tense: 'future',
  user: user
});
console.log(result); // => Zlatko will run
```

### Complex example of the conditional translation

Here is little bit complex gender example where is translation based on two external variables.

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  working: `{$user1.gender, select,
    male   {Boy}
    female {Girl}
  } {$user1.name} is working with {$user2.gender, select,
    male   {boy}
    female {girl}
  } {$user2.name}`,
});

const user1 = {
  gender: 'male',
  name: 'Zlatko'
};

const user2 =  {
  gender: 'female',
  name: 'Livia'
};

const result = t.get('working', {
  user1: user1,
  user2: user2
});
console.log(result); // => Boy Zlatko is working with girl Livia
```

### Combination of the conditional translation and reference translation

As you can see in the example above we are using gender selection twice. We can avoid duplication with reference translation. We are able to send into the nested translation different argments. Please take a look on the keyword "as".

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  gender: `{$gender, select, male {boy} female {girl}}`,
  working: `{gender, $user1.gender as gender} {$user1.name} working with {gender, $user2.gender as gender} {$user2.name}`,
});

const user1 = {
  gender: 'male',
  name: 'Zlatko'
};

const user2 =  {
  gender: 'female',
  name: 'Livia'
};

const result = t.get('working', {
  user1: user1,
  user2: user2
});
console.log(result); // => boy Zlatko is working with girl Livia
```

### Filters

As you can see our two examples above are not same. We have two diferent results:
1. Boy Zlatko is working with girl Livia
2. boy Zlatko is working with girl Livia

We need to capitalize first character. For this behavior we have filters.
Here is a very simple example

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  greeting: `Hello {$name | uppercase}`,
});

const result = t.get('working', {
  name: 'Zlatko'
});

console.log(result); // => Hello ZLATKO
```

It is very simple to rewrite our working example

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  gender: `{$gender, select, male {boy} female {girl}}`,
  working: `{gender, $user1.gender as gender | capitalize} {$user1.name} working with {gender,
  $user2.gender as gender} {$user2.name}`,
});

const user1 = {
  gender: 'male',
  name: 'Zlatko'
};

const user2 =  {
  gender: 'female',
  name: 'Livia'
};

const result = t.get('working', {
  user1: user1,
  user2: user2
});
console.log(result); // => Boy Zlatko is working with girl Livia
```

### Plural example

For this task you can use conditional translations as well.

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  followers: `{$user.name} has {$user.followers, plural
    zero  {no followers}
    one   {{$user.followers} follower}
    other {{$user.followers} followers}
  }`
});

const user = {
  name: 'Zlatko',
  followers: 15,
};

const result = t.get('followers', {
  user: user
});
console.log(result); // => Zlatko has 15 followers
```

You can use "#" instead of variable. In next example character "#" will equal $user.followers

```js
import Translate from 'translate-maker';

const t = new Translate();
t.set({
  followers: `{$user.name} has {$user.followers, plural
    zero {no followers}
    one  {# follower}
         {# followers}
  }`
});

const user = {
  name: 'Zlatko',
  followers: 15,
};

const result = t.get('followers', {
  user: user
});
console.log(result); // => Zlatko has 15 followers
```

Plural function is using module CLDR which can have one of these values based on your current locale:
```js
['zero', 'one', 'two', 'few', 'many', 'other']
```

or you can use exact value

 =1 when value is equal 1
 =2 when value is equal 2
 =3 when value is equal 3
 ...


You can use predefined constant named Plural instead of String representation

```js
import Translate, { Plural } from 'translate-maker';

const t = new Translate();
t.set({
  followers: `{$user.name} has {$user.followers, plural
    ${Plural.ZERO} {no followers}
    ${Plural.ONE}  {# follower}
                   {# followers}
  }`
});
```

You can use predefined constant named Gender instead of String representation

```js
import Translate, { Gender } from 'translate-maker';

const t = new Translate();
t.set({
  working: `{$user1.gender, select,
    ${Gender.MALE}   {Boy}
    ${Gender.FEMALE} {Girl}
  } {$user1.name} is working with {$user2.gender, select,
    ${Gender.MALE}   {boy}
    ${Gender.FEMALE} {girl}
  } {$user2.name}`,
});

const user1 = {
  gender: 'male',
  name: 'Zlatko'
};

const user2 =  {
  gender: 'female',
  name: 'Livia'
};

const result = t.get('working', {
  user1: user1,
  user2: user2
});
console.log(result); // => Boy Zlatko is working with girl Livia
```

### Filters

You can use one of the predefined filters:

 * as
 * [camelCase](https://lodash.com/docs#camelCase)
 * [capitalize](https://lodash.com/docs#capitalize)
 * [escape](https://lodash.com/docs#escape)
 * lowerCase
 * plural
 * select {$gender | select, male {Boy}, female {Girl}, {Girl/Boy}}
 * [trim](https://lodash.com/docs#trim)
 * [trunc](https://lodash.com/docs#trunc) {$name | trunc, 6, '...'}
 * upperCase

Filter is simple function with arguments. We are supporting various argument types. Basic types are fully compatible with JSON. You can use ',' or space beatwean arguments.

 * null (null)
 * undefined (undefined)
 * bool (true, false)
 * string ('He\'s cool' or "He's cool")
 * number (45, -5.2)
 * references (daytypes.morning)
 * variables ($user.name)
 * key value (male {he is boy} or you can use default value without key {is boy or girl})

You can use multiple filters as well. Please use character "|" between filters. First filter can be splitted by comma ",""

```js
t.set({
  'hello': 'Hello {$user.name | trunc, 6 | capitalize}'
});
```

Next syntax is same:

 * Hello {$user.name | trunc, 6 | capitalize}
 * Hello {$user.name | trunc  6 | capitalize}
 * Hello {$user.name,  trunc, 6 | capitalize}
 * Hello {$user.name,  trunc  6 | capitalize}

### Own filters

```js
import Translate from 'translate-maker';

function filter(value) {
  return value + '***';
}

const t = new Translate();
t.setFilter('star', filter);

t.set({
  'hello': 'Hello ${name | star}'
});

const result = t.get('hello', {
  name: 'Zlatko'
});

console.log(result); // => Hello Zlatko***
```

### Complex own filter

Each function has 4 fixed arguments. Others are optional.

 * value (initial value)
 * part (more information about current filter)
 * attrs (attributes passed by the user)
 * metadata (metadata assigned to the current translation)

```js
import trunc from 'lodash/string/trunc';

function truncFilter(value, part, attrs, metadata, length = 30, omission = '...') {
  return trunc(value, {
    length,
    omission,
  });
}
```

### Metadata

Each filter can handle own metadata. For example you can see offset in next plural example.
Structure of the metadata is key: value.

```js
import Translate from 'translate-maker';

const t = new Translate();

t.set({
  following: `{$user.name} {$user.followers, plural, offset: 1
    zero {follows nobody}
    one  {follows {$follower.name}}
         {follows {$follower.name} and # others}
  }`
});

const user = {
  name: 'Zlatko',
  followers: 3,
};

const follower = {
  name: 'Livia'
};

const result = t.get('following', {
  user: user,
  follower: follower
});

console.log('result'); // => Zlatko follows Livia and 2 others
```

Value can be:
 * null (null)
 * undefined (undefined)
 * bool (true, false)
 * string ('He\'s cool' or "He's cool")
 * number (45, -5.2)
 * references (daytypes.morning)
 * variables ($user.name)

There is no support for pairs as value.

# Running Tests

To run the test suite, first invoke the following command within the repo, installing the development dependencies:

```sh
npm install
```

Then run the tests:

```sh
npm test
```
