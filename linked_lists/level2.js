// Write a function named insertInBack that takes in the following:
//   value (a number)
//   list (a linked list)
// The function returns the linked list with the node inserted at the end.
// Example:
//    insertInBack(1 -> 2 -> 3 -> ., 4) produces 1 -> 2 -> 3 -> 4 -> .
function insertInBack(value, list) {
  let current = list;
  let done = false;

  if (!list) {
    list = { value, next: null };
  } else {
    while (!done) {
      if (!current.next) {
        current.next = { value, next: null };
        done = true;
      }

      current = current.next;
    }
  }

  return list;
}

// Write a function named removeNodeAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the linked list with the node at that index removed.
// Example:
//  removeNodeAtIndex(1 -> 2 -> 3 -> ., 1) produces 1 -> 3 -> .
function removeNodeAtIndex(list, index) {
  let current = list;
  let prev = null;
  let i = 0;

  while(current !== null) {
    if (i === index) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
    i++;
  }

  return list;
}

// Write a function named reverse that takes in the following:
//   list (a linked list)
// The function returns a NEW linked list with the items in reverse order.
// Example:
//   1 -> 2 -> 3 -> . would produce 3 -> 2 -> 1 -> .
function reverse(list) {
  let current = list;

  while (current.next !== null) {
    current.next = list;
  }

}

module.exports = {
  insertInBack,
  removeNodeAtIndex,
  reverse
};
