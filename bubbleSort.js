function swapArrElement(arr, index1, index2) {
  let tempValue2 = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = tempValue2;
}

function bubbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true; //assuming array to be sorted at beginning of each loop
    for (let l = 0; l < arr.length - 1; l++) {
      if (arr[l] > arr[l + 1]) {
        swapArrElement(arr, l, l + 1); // sorting adjacent elements and marking sorted as false
        sorted = false;
      }
    } // when everything is sorted and nothing is swapped sorted remains true and while loop ends.
  }
}

let myArr = [2, 4, 1, 3, 5, 8, 2, 5, 7];
bubbleSort(myArr);
console.log(myArr);