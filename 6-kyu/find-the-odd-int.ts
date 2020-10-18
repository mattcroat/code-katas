// 🔗 https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(numbers) {
  // create a dictionary that holds each number
  const numbersDictionary = {}

  for (const number of numbers) {
    // if the number exists increment the count otherwise add it
    if (numbersDictionary[number]) {
      numbersDictionary[number] += 1
    } else {
      numbersDictionary[number] = 1
    }
  }

  // return the odd number
  for (const number in numbersDictionary) {
    if (numbersDictionary[number] % 2) {
      return +number
    }
  }
}

function findOdd(numbers) {
  const numbersDictionary = {}

  numbers.forEach(number => numbersDictionary[number] ? numbersDictionary[number] += 1 : numbersDictionary[number] = 1)

  for (const number in numbersDictionary) {
    if (numbersDictionary[number] % 2) return +number
  }   
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))
console.log(findOdd([10]))
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))
