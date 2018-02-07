var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo){
  return [foo, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
  return [chocolateBars.unshift("foo")]
}