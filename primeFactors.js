function primeFactors(num) {
  //cover 2 factors
  while (num % 2 === 0) {
    num = num / 2;
    console.log(2);
  }

  // now num is an odd number
  // starting with 3, we can skip the even numbers
  // also we will cover till Sqrt of num and capture the remaining part in next code block

  for (let l = 3; l * l <= num; l = l + 2) {
    while (num % l === 0) {
      num = num / l;
      console.log(l);
    }
  }

  // if theres anything remaining, capturing it here
  if (num !== 1) {
    console.log("remaining part");
    console.log(num);
  }
}

primeFactors(21);
