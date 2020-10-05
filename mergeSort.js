function merge(leftArr, rightArr) {
  let result = [],
    leftIndex = 0,
    rightIndex = 0; // leftIndex, rightIndex to track upto which point arrays are compared
  while (leftIndex !== leftArr.length && rightIndex !== rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  //remaining arrays, only one of these will be remaining
  let leftRem = leftArr.slice(leftIndex);
  let rightRem = rightArr.slice(rightIndex);
  return result.concat(leftRem).concat(rightRem);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let midIndex = Math.floor(arr.length / 2);//keep on dividing the array, till just one element
  let leftArray = arr.slice(0, midIndex);
  let rightArray = arr.slice(midIndex);
  return merge(mergeSort(leftArray), mergeSort(rightArray));//merge starts when arrays divided to each single element
}

let myArr = [2, 4, 1, 3, 5, 8, 2, 5, 7];
console.log(mergeSort(myArr));