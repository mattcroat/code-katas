// 🔗 https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  // get number of digits
  const exponent = value.toString().length

  // add each number to the power of the number of digits
  const narcissistic = value
    .toString()
    .split('')
    .reduce((accumulator, currentValue) => accumulator + Math.pow(currentValue, exponent), 0)

  return value === narcissistic
}

function narcissistic(value) {
  return value
    .toString()
    .split('')
    .reduce((accumulator, currentValue, _, array) => accumulator + Math.pow(currentValue, array.length), 0) === value  
}

console.log(narcissistic(7))
console.log(narcissistic(371))
