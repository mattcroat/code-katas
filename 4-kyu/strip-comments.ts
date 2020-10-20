// 🔗 https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers) {
  // split by newline
  let sentence = input.split('\n')

  // loop over each mark
  markers.forEach((_, index) => {
    // loop over each word
    sentence = sentence.map(split => {
      // get the index of the current mark from the split part
      // example: 'oranges !applesauce'.indexOf('!') would return 8
      const markIndex = split.indexOf(markers[index])
      
      // if there's a match...
      if (markIndex !== -1) {
        // only return the part up to that index
        // example: 'oranges !applesauce'.substr(0, 8) would return 'oranges '
        return split.substr(0, markIndex)
      }

      // replace zero or more space character with nothing
      return split.replace(/\s*$/, '')
    })
  })

  // return string on newline and trim whitespace
  return sentence.join('\n').trim()
}

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]))
