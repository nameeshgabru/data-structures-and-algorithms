//prime
function testPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num <= 3) {
    return true;
  } //2 and 3 covered

  // prime numbers except 2, 3 >>>>  5,7,11,13,19 etc are of the form 6k+-1
  // using 6k form, all numbers can be written as
  // 6k-1
  // 6k   THIS IS DIVISIBLE BY 2
  // 6k+1
  // 6k+2 THIS IS DIVISIBLE BY 2
  // 6k+3 THIS IS DIVISIBLE BY 3
  // 6k+4 THIS IS DIVISIBLE BY 2

  // covering divisible by 2 and 3
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  // if num is not a prime, it will be of the form num = m*n; and one of m or n will be less than Sqrt of num
  // so we need to cover till Sqrt of num only
  for (l = 5; l * l <= num; l = l + 6) {
    //checking for 6k-1 and 6k+1 cases only
    if (num % l === 0 || num % (l + 2) === 0) {
      return false;
    }
  }
  return true;
}

let count = 0;
for (let l = 1; l < 100000; l++) {
  if (testPrime(l)) {
    count++;
  }
}
console.log(count);
