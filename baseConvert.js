function reverseString(str) {
  let result = "";
  for (let l = str.length - 1; l >= 0; l = l - 1) {
    result += str.charAt(l);
  }
  return result;
}

/**
 * Keep on getting remainder while changing the num to quotient
 */
function baseConvert(faceValues, num) {
  let base = faceValues.length;
  let result = "";
  if (num === 0) {
    return faceValues[0];
  }
  while (num !== 0) {
    let remainder = num % base;
    result += faceValues[remainder]; // we got result from right to left, last digit is entered first, we need to reverse
    let quotient = Math.floor(num / base);
    num = quotient;
  }
  return reverseString(result);
}

console.log(baseConvert(["0", "1"], 11)); //base2
console.log(baseConvert("0123456789".split(""), 11)); //decimal
console.log(baseConvert("0123456789ABCDEF".split(""), 15)); //hexadacimal
console.log(
  baseConvert(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),
    110852
  )
); //base62




function backToDecimal(faceValues, baseString) {
  let base = faceValues.length;
  let result = 0;
  for (
    let l = 0, baseStringLength = baseString.length;
    l < baseStringLength;
    l++
  ) {
    let char = baseString.charAt(l);
    let charDecimalValue =
      faceValues.indexOf(char) * Math.pow(base, baseStringLength - l - 1);
    result += charDecimalValue;
  }
  return result;
}

console.log(backToDecimal(["0", "1"], "1011")); //base2
console.log(backToDecimal("0123456789".split(""), "11")); //decimal
console.log(backToDecimal("0123456789ABCDEF".split(""), "F")); //hexadecimal
console.log(
  backToDecimal(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),
    "CZ6"
  )
); //base62
