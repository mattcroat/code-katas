// 🔗 https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function anagrams(word, words) {
  const anagrams = []

  // sort words in alphabetical order
  const sortedWord = word.split('').sort().join('')
  const sortedWords = words.map(word => word.split('').sort().join(''))

  // compare sorted and unsorted words
  sortedWords.forEach((word, index) => {
    // check if it's an anagram
    if (word === sortedWord) {
      // index is required because there could be multiple same values
      const match = sortedWords.indexOf(word, index)
      anagrams.push(words[match])
    }
  })

  return anagrams
}

function anagrams(word, words) {
  return words.filter(listedWord => listedWord.split('').sort().join('') === word.split('').sort().join(''))
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))
