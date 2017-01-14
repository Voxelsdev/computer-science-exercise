// Write a function named count that takes in one argument:
//  list - a Linked List
// The function returns the number of elements in the list.
function count(list) {
  if (list === null) {
    return 0;
  } else {
    return 1 + count(list.next);
  }
}

// Write a function named insertInFront that takes in one argument:
//   value (a number)
//   list  (a linked list)
// The function returns the same linked list with the value inserted in front.
// Example:
//    insertInFront(1 -> 2 -> 3 -> ., 4) produces 4 -> 1 -> 2 -> 3 -> .
function insertInFront(value, list) {
  return { value, next: list };
}

// Write a function named sum that takes in one argument:
//  list - a Linked List
// The function returns the sum of all of the elements in the list.
function sum(list) {
  if (list === null) {
    return 0;
  } else {
    return list.value + sum(list.next);
  }
}

// Write a function named getValueAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the value of the item at the index. If an invalid index
// is used, it will throw an error.
// Example:
//  getValueAtIndex(1 -> 2 -> 3 -> ., 2) produces 3
//  getValueAtIndex(1 -> 2 -> 3 -> ., 0) produces 1
//  getValueAtIndex(1 -> 2 -> 3 -> ., 4) throws an error
function getValueAtIndex(list, index) {
  let current = list;

  if (index < 0) {
    throw new Error('Index must be greater than -1');
  }

  for (let i = 0; i < index; i++) {
    if (current.next) {
      current = current.next;
    } else {
      throw new Error('Index out of bounds');
    }
  }
  return current.value;
}

// Write a function toArray that takes in one argument:
//   list (a linked list)
// The function returns an array of the values in the linked list.
// Example:
//   1 -> 2 -> 3 -> .  would produce [1, 2, 3]
function toArray(list) {
  const arr = [];
  let current = list;

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  return arr;
}

module.exports = {
  count,
  insertInFront,
  sum,
  getValueAtIndex,
  toArray
};
