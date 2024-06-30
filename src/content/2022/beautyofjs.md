---
layout: ../../layouts/postsLayout.astro
title: Beauty Of Javascript
collection: 2022
pubDate: "2022-02-11"
slug: beauty-of-js
description: Here is why I love to code in Javascript
tags: ["Test", "Schema", "Validation"]
---


I started learning Javascript when I was in 9th standard. But really diving into it last year. I felt love to code in it. I found JavaScript, an incredibly versatile language that is well-suited for web development, the thing I do most. Many people assume that if you love JS, then you tried no other language. But I have found that JavaScript's ability to manipulate the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) and handle user interactions make it the best choice for web development. That being said, I recognize that every language has its own strengths and limitations.

## :computer: Why Javascript?

---

With the rise of [Single Page Applications (SPAs)](https://developer.mozilla.org/en-US/docs/Glossary/SPA) and the increasing demand for dynamic, interactive web experiences, JavaScript has become more important than ever. Because of its client-side execution, DOM interaction, and on-the-fly HTML and CSS manipulation capabilities, it is frequently used to create everything from basic website widgets to comprehensive web apps.
JavaScript has developed to satisfy the needs of contemporary web development, moving beyond classes and modules to include promises and arrow functions.

## The Foundation of OOPs!
One of the most significant improvements in JavaScript has been the addition of [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), which provide a more structured way to work with [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). Classes are an integral concept of a mature programming language, and they make it easier to create and manage complex applications. They provide a more intuitive syntax for working with objects, including [constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor), [getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set), [static members](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static), [super calls](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), and [sub-classing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/).

## A Native Implementation for Modular Code

For years, JavaScript developers have been working on systems that allow them to write modular code required to build complex applications at scale. Systems like [CommonJS](https://en.wikipedia.org/wiki/CommonJS) and [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition) have become commonplace in the modern development environment. With ES6, the module system has a very compact syntax and supports asynchronous and configurable module loading, a system that CommonJS and AMD fans alike will love. This native implementation allows developers to write more efficient and maintainable code.

Refer - [JavaScript Modules by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## Arrow Functions, A Shortcut to Cleaner Code
[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorthand method for writing anonymous functions, and they also provide [lexical scoping](https://www.educative.io/answers/lexical-scope-in-javascript) inheriting from their parent. With arrow functions, JavaScript developers no longer need to hack around the issue of passing scope between contexts with `bind()` and `apply()` or `this = that`. Instead, they can use an arrow function as a callback and access the goodies of the parent function.

## Greater Control Over the Flow of a Program
JavaScript has always had [function-level scope](https://medium.com/nerd-for-tech/function-scope-block-scope-in-js-d29c8e7cd216#:~:text=Function%20Scope%3A%20When%20a%20variable,that%20particular%20condition%20or%20loop.), tripping up beginners and inflicting hacky pain on experienced developers throughout the industry. The let statement declares a block scope local variable and allows developers greater control over the flow of a program, offering respite from hoisting side effects. Put simply, a let variable declared inside of an if statement is not accessible from the outside, bringing some much-needed sanity to the language.

```js:index.js
function exampleFunction() {
  let x = 1;
  
  if (true) {
    let x = 2; // declares a new variable x with block scope
    console.log(x); // outputs 2
  }
  
  console.log(x); // outputs 1
}

exampleFunction();
```

## A Better Way to Handle Asynchronous Code
[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) have become one of the most popular design patterns in JavaScript. They allow us to write readable asynchronous code that’s easy to work with, ridding us of nested callback hell. With ES2015, promises are baked into the language, including all the features we’ve grown to love in earlier implementations. If you are new to Promises, now is the time to get involved.

## More Natural Way to Build HTML with Template Strings
Building HTML with regular string concatenation is a nightmare with JavaScript, and it's an essential part of a language that constantly interacts with the DOM. Developers have been trying to fix this problem for years with fully fledged templating systems like Mustache, Handlebars, EJS, and others. Finally, using the new backtick operator, JavaScript developers can create template strings using variables natively in the language. String interpolation and multi-line strings are now supported, making building HTML in JavaScript a more natural and efficient process.

```js:name.js
const firstName = "Shatoshi";
const lastName = "Nakamoto";
const age = 20;

const html = `
  <div class="person">
    <h2>${firstName} ${lastName}</h2>
    <p>Age: ${age}</p>
  </div>
`;

document.body.innerHTML = html;
```


## Streamlining Your Code with JavaScript's Built-In Looping Mechanism
[JavaScript Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators) are powerful tools that allow developers to traverse through data structures and retrieve data in a specific order. These are objects that implement the Iterator Protocol, consisting of a `next()` method that returns the next value in a sequence. Iterators can be used with various data structures like Arrays, Maps, Sets, and more. With the help of the for...of loop, developers can use iterators to easily iterate over these data structures and retrieve the desired values.

## Unlocking Advanced Control Flow in JavaScript with Generators
[Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generator_functions) are an advanced feature of JavaScript that allow developers to create iterators with a simpler syntax. A generator is a function that returns an iterator, and instead of using the `next()` method to retrieve the next value in a sequence, developers can use the yield keyword to return a value and pause the generator. This allows developers to create iterators that can be paused and resumed at any time, making them incredibly flexible and powerful.

Refer - [The Power of JS Generators by Anjana Vakil](https://www.youtube.com/watch?v=gu3FfmgkwUc)

## How JavaScript's Flexible Function Parameters Can Improve Your Code
JavaScript Parameters refer to the inputs that are passed to a function when it is called. With the introduction of ES6, developers can now use new features like default parameters and rest parameters. Default parameters allow developers to set a default value for a parameter in case it is not provided when the function is called. Rest parameters, on the other hand, allow developers to pass an indefinite number of arguments to a function and store them in an array.

Refer - [Function parameters from MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters)

## Other Interesting things about Javascript

### Metaprogramming

JavaScript has great support for Metaprogramming. It provides the Proxy and Reflect objects that allow you to intercept and define custom behavior to existing language operators. Definitely an advanced feature which has its own use-cases.

Refer - [Eirik Vullum: JavaScript Metaprogramming - ES6 Proxy Use and Abuse](https://www.youtube.com/watch?v=_5X2aB_mNp4)

### Destructuring in Javascript

[The destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)  syntax is an **ES6** feature, that allows you to unpack values from an array or an object into separate variables.

#### Browser Extensions

Browser Extensions can’t be developed without JS. As extensions’ development focus on doing most of the work on the client-side.

#### Beginner friendly but also powerful

JavaScript is one of the easiest languages for beginners. But it is also one of the most powerful languages. If you have a web browser on your computer that is all you need to write JavaScript. One of the biggest community is available on the internet.
There is no other language that I have seen which is as versatile as JavaScript. But remember learning JavaScript is easy but becoming a good JavaScript developer is quite hard.
It can run any device, in a browser, mobile devices, server-side, Desktop apps, OS, IoT, robots, virtual reality, smartwatches, etc.

#### Less verbose and clean syntax

It definitely is possible to write unreadable code in JavaScript but at the same time you can write beautiful expressive code as well and I find the JS syntax more readable than many other languages.