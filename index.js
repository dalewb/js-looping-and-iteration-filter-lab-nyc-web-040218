// Code your solution in this file

function findMatching(arr, string) {
  return arr.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(arr, string) {
  return arr.filter(name => name[0] === string[0])
}

function matchName(arr, string) {
  return arr.filter(el => el.name === string)
}
