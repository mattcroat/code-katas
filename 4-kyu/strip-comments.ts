// 🔗 https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers) {
  // split by newline
  let sentence = input.split('\n')

  // loop over each mark
  markers.forEach((_, index) => {
    // loop over each word
    sentence = sentence.map(word => {
      // get the index of the current mark in sentence
      // example: '%'.indexOf('%') would be 14
      const markIndex = word.indexOf(markers[index])
      
      // if there's a match...
      if (markIndex !== -1) {
        // remove mark at specified index
        // example: word.substr(0, 14)
        return word.substr(0, markIndex)
      }

      // replace zero or more space character with nothing
      return word.replace(/\s*$/, '')
    })
  })

  // return string on newline and trim whitespace
  return sentence.join('\n').trim()
}

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]))
