function isValidArray(arr, num) {
  try {
    if (!arr && !num) {
      throw new ReferenceError('Send the parameters');
    }

    if (typeof arr !== 'object') {
      throw new TypeError('Type of array must be object');
    }

    if (typeof num !== 'number') {
      throw new TypeError('Type of num must be number');
    }

    if (arr.length !== num) {
      throw new RangeError('Array length must be equal to number');
    }

    return arr;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('This is a reference error');
      console.log(error.message);
    } else if (error instanceof TypeError) {
      console.log('This is a type error');
      console.log(error.message);
    } else if (error instanceof RangeError) {
      console.log('This is a range error');
      console.log(error.message);
    } else {
      console.log('The error occurred was not expected:' + error);
    }
  }
}

console.log(isValidArray([1, 2, 3], 3));
