'use strict'

function swap(arr, idx1, idx2) {
  return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
  let done = false;

  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        swap(arr, i, i - 1);
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  let curMin = 0;

  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(arr, min, i);
    }
  }

  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j-1] > arr[j]) {
      swap(arr, j, j-1);
      j--;
    }
  }
  return arr;
}

function merge(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

function partition(arr, left, right) {
  let pivot = arr[left];
  let partitionIndex = left;

  for (let i = left + 1; i < right + 1; i++) {
    if (arr[i] < pivot) {
      partitionIndex++;

      const temp = arr[i];

      arr[i] = arr[partitionIndex];
      arr[partitionIndex] = temp;
    }
  }

  const temp = arr[partitionIndex];

  arr[partitionIndex] = pivot;
  arr[left] = temp;

  return partitionIndex;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return (merge(left, right));
}

/* 1. If left is less than right, declare a variable called partitionIndex which is equal
        to the result of a call to partition, passing in arr, left, and right. After the call
        to partition, perform a quicksort to the two subarrays to the left and right of the
        partitionIndex.

   2. Return arr.
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr[left] < arr[right]) {
    const partitionIndex = partition(arr, left, right);

    quickSort(arr, left, partitionIndex);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

module.exports = {
  swap,
  bubbleSort,
  selectionSort,
  insertionSort,
  merge,
  partition,
  mergeSort,
  quickSort
};
