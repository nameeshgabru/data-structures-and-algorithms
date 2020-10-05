// A/4 = (PI*r^2)/4 = Integral Sqrt(r^2-x^2)dx from 0 to 1,
// with r = 1, PI = 4 * Integral Sqrt(1-x^2)dx from 0 to 1
let interval = 0.0000001;
let PI = 0;
for (let l = 0; l < 1; l = l + interval) {
  PI = PI + 4 * Math.sqrt(1 - Math.pow(l, 2)) * interval;
}

console.log(PI);
console.log(Math.PI);