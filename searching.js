function linearSearch(arr, num) {
  for (let l = 0; l < arr.length; l++) {
    if (arr[l] === num) {
      return l;
    }
  }
  return -1;
}

console.log(linearSearch([2, 1, 3, 4], 3));
console.log(linearSearch([2, 1, 3, 4], 5));

function binarySearch(arr, num) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let midIndex = Math.floor((endIndex + startIndex) / 2);
  while (endIndex - midIndex !== 0 && midIndex - startIndex !== 0) {
    // console.log(startIndex, midIndex, endIndex);

    let midValue = arr[midIndex];
    if (num > midValue) {
      startIndex = midIndex;
      midIndex = Math.floor((endIndex + startIndex) / 2);
    } else if (num < midValue) {
      endIndex = midIndex;
      midIndex = Math.floor((endIndex + startIndex) / 2);
    } else {
      return midIndex;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));
console.log(binarySearch([1, 3, 5, 7, 9], 6));
