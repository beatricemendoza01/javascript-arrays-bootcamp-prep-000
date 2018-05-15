var chocolateBars = ['snickers', 'hendred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  var new_array = array.slice(1);
  return new_array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var new_array = array.slice(0, array.length - 1);
  return new_array;
}