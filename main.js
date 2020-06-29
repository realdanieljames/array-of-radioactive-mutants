/******************
 * YOUR CODE HERE *
 ******************/

function addMeToEnd(arr) {
  arr.push('Colin');
}


function addMeToStart(arr) {
  arr.unshift('Colin');
}

function changeLast(arr, valueGiven){
  arr[arr.length - 1 ] = valueGiven
}

function changeAllValuesTo(arr, valueGiven){
  for(i in arr){
    arr[i] = valueGiven
  }
}

function oddOrEven(arr){
  for(i in arr){
    if (arr[i] % 2 == 0){
      arr[i] = 'even'
    }
    else { arr[i] = 'odd'}
    }
}


function changeNextThreeToValue(givenIndex, arr, valueGiven){
  arr = arr.splice(givenIndex, 3, valueGiven, valueGiven, valueGiven )
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
