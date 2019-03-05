'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase (str, str1, str2, result){
    str1 = str.substring(0, 1);
    str2 = str.substr(1);
    result = str1.toUpperCase() + str2.toLowerCase()
    return result 
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('hello'),'Hello')
// End of tests */
