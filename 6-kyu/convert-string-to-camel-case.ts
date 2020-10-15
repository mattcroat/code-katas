// 🔗 https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  // return if empty string
  if (!str) return ''

  let pascalCase = false

  // first word should only be capitalized if pascal case
  if (str.charAt(0) === str.charAt(0).toUpperCase()) {
    pascalCase = true
  }
  
  // break each word delimited by dash or underscore
  let words = str.split(/[_-]/)

  words = words.map(word => word.charAt(0).toUpperCase() + word.substr(1)).join('')
  
  if (!pascalCase) {
    words = words.charAt(0).toLowerCase() + words.substr(1)
  }

  return words
}

function toCamelCase(str) {
  // using character capture "some_string" would match "_s" 
  return str.replace(/[_-](.)/g, (_, char) => char.toUpperCase());
}

console.log(toCamelCase(''))
console.log(toCamelCase('the_stealth_warrior'))
console.log(toCamelCase('The-Stealth-Warrior'))
console.log(toCamelCase('A-B-C'))
