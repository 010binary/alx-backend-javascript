# ES6 Basics

Welcome to the ES6 Basics guide! This document provides an introduction to the essential features of ECMAScript 2015 (ES6), which is the sixth edition of the ECMAScript standard. ES6 introduced significant improvements and new features to JavaScript, making it more powerful and easier to work with.

## Table of Contents

1. [Introduction](#introduction)
2. [Block-Scoped Variables](#block-scoped-variables)
3. [Arrow Functions](#arrow-functions)
4. [Template Literals](#template-literals)
5. [Destructuring](#destructuring)
6. [Default Parameters](#default-parameters)
7. [Rest and Spread Operators](#rest-and-spread-operators)
8. [Classes](#classes)
9. [Modules](#modules)
10. [Promises](#promises)
11. [Iterators and Generators](#iterators-and-generators)
12. [Symbols](#symbols)
13. [Maps and Sets](#maps-and-sets)
14. [Conclusion](#conclusion)

## Introduction

ECMAScript 2015 (ES6) is a major update to JavaScript that includes dozens of new features and syntactical improvements. This guide covers the fundamental features that every JavaScript developer should understand to write modern, clean, and efficient code.

## Block-Scoped Variables

### `let` and `const`

- `let` allows you to declare variables that are limited in scope to the block, statement, or expression on which they are used.
- `const` allows you to declare variables whose values are immutable (cannot be reassigned).

```javascript
let x = 10;
if (x === 10) {
    let y = 20;
    console.log(y); // 20
}
console.log(x); // 10

const PI = 3.14;
// PI = 3.1415; // TypeError: Assignment to constant variable.
```

## Arrow Functions

Arrow functions provide a shorter syntax for writing function expressions and lexically bind the `this` value.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

const greet = name => `Hello, ${name}!`;
console.log(greet('Alice')); // Hello, Alice!
```

## Template Literals

Template literals allow embedded expressions and multi-line strings using backticks (\`).

```javascript
const name = 'Alice';
const message = `Hello, ${name}!`;
console.log(message); // Hello, Alice!

const multiline = `This is a string
that spans multiple
lines.`;
console.log(multiline);
```

## Destructuring

Destructuring assignment allows you to unpack values from arrays or properties from objects into distinct variables.

```javascript
// Array Destructuring
const [a, b] = [1, 2];
console.log(a, b); // 1 2

// Object Destructuring
const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25
```

## Default Parameters

Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.

```javascript
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!
console.log(greet('Alice')); // Hello, Alice!
```

## Rest and Spread Operators

### Rest Operator

The rest operator (`...`) allows you to represent an indefinite number of arguments as an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
```

### Spread Operator

The spread operator (`...`) allows an iterable (like an array) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
```

## Classes

ES6 introduces a new syntax for creating classes, which are syntactical sugar over JavaScript's existing prototype-based inheritance.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const alice = new Person('Alice', 25);
console.log(alice.greet()); // Hello, my name is Alice and I am 25 years old.
```

## Modules

ES6 modules allow you to import and export code between files.

### Exporting

```javascript
// file: math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

### Importing

```javascript
// file: main.js
import { add, subtract } from './math';
console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
```

## Promises

Promises provide a way to handle asynchronous operations. They represent a value that may be available now, or in the future, or never.

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise.then(result => {
    console.log(result); // Success!
}).catch(error => {
    console.error(error);
});
```

## Iterators and Generators

### Iterators

Iterators are objects that define a sequence and potentially a return value upon its termination.

```javascript
const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### Generators

Generators are functions that can be paused and resumed, producing a sequence of values.

```javascript
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

## Symbols

Symbols are a new primitive type in ES6, representing a unique and immutable value.

```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false
```

## Maps and Sets

### Maps

Maps are collections of key-value pairs where the keys can be of any type.

```javascript
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
console.log(map.get('name')); // Alice
console.log(map.size); // 2
```

### Sets

Sets are collections of unique values.

```javascript
const set = new Set([1, 2, 2, 3]);
console.log(set.has(2)); // true
console.log(set.size); // 3
```

## Conclusion

ES6 brings many powerful new features to JavaScript, making it easier and more enjoyable to write modern, clean, and efficient code. Understanding these basics will help you leverage the full potential of ES6 in your projects. Happy coding!
