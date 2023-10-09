function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((value, index) => value === arr2[index]);
}

// Примеры использования:
console.log(compareArrays([8, 9], [6])); // false
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true