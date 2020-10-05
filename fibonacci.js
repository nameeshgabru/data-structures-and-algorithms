function fibonacciIteration(n) {
  if (n <= 1) {
    return n;
  }
  let last = 1,
    lastToLast = 0,
    sum = 0;

  for (let i = 2; i <= n; i++) {
    sum = last + lastToLast;
    lastToLast = last;
    last = sum;
  }
  return sum;
}

// for (let l = 1; l <= 10; l++) {
//   console.log(fibonacciIteration(l));
// }

function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// for (let l = 1; l <= 10; l++) {
//   console.log(fibonacciRecursive(l));
// }

function fibonacciBetterReccursion(n, lastToLast, last) {
  if (n == 0) return lastToLast; // only needed if input n is 0
  if (n == 1) {
    return last; // when reached 1, returing all the added numbers saved in last during all the recursions
  }
  return fibonacciBetterReccursion(n - 1, last, last + lastToLast); // going backwards towards n=1 and keeping sum as last variable to the function
}
for (let l = 1; l <= 10; l++) {
  console.log(fibonacciBetterReccursion(l, 0, 1));
}
