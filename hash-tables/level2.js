'use strict';

/*

Create a function named reverseMerge.
It takes two arguments "keyArr" and "valArr" both of type Array.
It will return a hash that is a merge between the two inputs where
the values in keyArr will be the hashes key and
the values in valArr will be the hashes value.
The catch is that the values from the valArr will be assigned in from last to first.

i.e.
keyArr = [a, b, c];
valArr = [1, 2, 3];

output => {a: 3, b: 2, c: 1}

*/

const reverseMerge = (keyArr, valArr) => {
  const res = {};
  let length  = keyArr.length > valArr.length ? keyArr.length : valArr.length;
  let newLength = length;

  for (let i = 0; i < length; i++) {
    if (i >= keyArr.length) {
      let lastKeyVal = [];

      for (let j = keyArr.length - 1; j >= 0; j--) {
        lastKeyVal.push(valArr[j]);
      }

      res['foo'] = lastKeyVal;
      return res;
    }
    res[keyArr[i]] = valArr[newLength - 1] || 42;
    newLength--;
  }
  return res;
}

/*

Create a function named mostUsedWord.
It takes a single argument "sentence" of type string.
It will return an object with a single key-value pair.
The key will be the word with the highest occurance in the string.
The value will the the number of occurances of that word in the string.

*/

const mostUsedWord = (sentence) => {
  const words = sentence.toLowerCase().split(' ');
  const counts = {};

  for (let word of words) {
    counts[word] = counts[word] ? counts[word] + 1 : 1;
  }

  let mostUsed = '';

  let max = Object.keys(counts).reduce((max, key) => {
    if (counts[key] > max) {
      mostUsed = key;
      return counts[key];
    } else {
      return max;
    }
  }, 0);

  return { [mostUsed]: counts[mostUsed] };
}

/*

Write a function, isAnagram.
It takes a two arguments "test" and "original", both of type string.
It returns TRUE if the words are anagrams of one another and FALSE if it is not.

*/

const isAnagram = (test, original) => {
  let sortedTest = test.split('').sort().join('');
  let sortedOrig = original.split('').sort().join('');

  return sortedTest === sortedOrig;
}

module.exports = { reverseMerge, mostUsedWord, isAnagram };
