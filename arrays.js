var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo){
  return [foo, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
  chocolateBars.unshift("foo")
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, foo){
  return [...chocolateBars, foo]
}
function destructivelyAddElementToEndOfArray (chocolateBars, foo){
  chocolateBars.push("foo")
  return chocolateBars
}
function accessElementInArray(array, index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(array)
  return array
}
function removeElementFromBeginningOfArray(array){
  array.slice()
  return array
}
