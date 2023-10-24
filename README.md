# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Version

1.0.0

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @uprajapa/lotide`

**Require it:**

`const _ = require('@uprajapa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([array])`: Takes an array as input and gives a head of that array
* `tail([array])`: Takes an array as input and gives tail of that array
* `middle([array])`: Takes an array as input and gives middle value(s) of that array
* `isPalindrome(string)`: Checks if given string is palindrome or not
* `flatten(array of nested arrays)`: Flatten given array and returns an array
* `map(array of strings)`: Takes an array of strings and returns array of first letter of string
* `assertArraysEqual(actualArray, expectedArray, Boolean)`: Assertion: comparing two array values
* `assertEqual(actualArray, expectedArray)`: Assertion: testing if two values are same