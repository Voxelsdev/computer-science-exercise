const FixedArray = require('./fixed_array');

class DynamicArray {
  constructor(length) {
    this.length = length;

    // Initialize the array for twice the length
    this.array = new FixedArray(length * 2);
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    return this.array.get(index);
  }

  set(index, item) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    this.array.set(index, item);
  }

  // Implement a method push that takes in one argument, item (a number), it
  // adds the item to the end of the array, copying it to a new FixedArray if
  // necessary. There is no need to return anything.
  push(item) {
    if (this.length === this.array.length) {
      const newArr = new FixedArray(this.length * 2);

      for (let i = 0; i < this.length; i++) {
        newArr.set(i, this.array.get(i));
      }

      newArr.set(this.length, item);
      this.array = newArr;
    } else {
      this.array.set(this.length, item);
    }
    this.length++;
  }

  // Implement a method pop that does not take in any arguments. It delete the
  // item at the end of the array.
  pop() {
    this.length--;
    this.array.set(this.length, undefined);
  }

  // Implement a method del that takes in one argument, index (a number), it
  // deletes the item at that index. There is no need to return anything.
  del(index) {
    const arr = this.array;

    for (let i = 0; i < this.length; i++) {
      if (i >= index) {
        arr.set(i, arr.get(i + 1));
      } else {
        arr.set(i, arr.get(i));
      }
    }
    this.length--;
    this.array = arr;
  }
}

module.exports = DynamicArray;
