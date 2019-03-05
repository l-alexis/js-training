'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

let yell = (str) => str.toUpperCase();
//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('hello'),'HELLO')
// End of tests */
