'use strict'

const linearSearch = function(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

let binarySearch = function(arr, val) {
  if (arr.length) {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((max + min) / 2);

    while (min <= max) {
      if (arr[mid] < val) {
        min = mid + 1;
      } else if (arr[mid] > val) {
        max = mid - 1;
      } else {
        return mid;
      }

      mid = Math.floor((max + min) / 2);
    }
  }
  return -1;
}

module.exports = { linearSearch, binarySearch };
