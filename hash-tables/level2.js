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
  const arrDiff = keyArr.length - valArr.length;

  if (arrDiff <= 0) {
    for (let i = 0 ; i < arrDiff * -1; i++) {
      res[keyArr[i]] = valArr[arrDiff * -1];
    }
  }

  for (let i = 0; i < keyArr.length; i++) {
    res[keyArr[i + arrDiff]] = valArr[valArr.length - (i + 1)];

    if (i === keyArr.length - 1 && arrDiff < 0) {
      res['foo'] = valArr.slice(0, i + 1).reverse();
    }
  }

  console.log(res);
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
    counts[word] = !counts[word] ? 1 : counts[word]++;
  }

  const maxKey = Object.keys(counts).reduce((max, key) => {
    return counts[key] > counts[max] ? key : max;
  }, 'lol');

  console.log(counts, maxKey);
}


/*

Write a function, isAnagram.
It takes a two arguments "test" and "original", both of type string.
It returns TRUE if the words are anagrams of one another and FALSE if it is not.

*/

const isAnagram = (test, original) => {

}

module.exports = { reverseMerge, mostUsedWord, isAnagram };
