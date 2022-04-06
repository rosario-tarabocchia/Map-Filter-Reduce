var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x){
//   return x * 2;
// }

const newNumbersMap = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbersMap);

//Filter - Create a new array by keeping the items that return true.

const newNumbersFilter = numbers.filter(function (num) {
  return num > 10;
});

console.log(newNumbersFilter);

//Reduce - Accumulate a value by doing something to each item in an array.

const newNumberReduce = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});

console.log(newNumberReduce);

//Find - find the first item that matches from an array.

const newNumberFind = numbers.find(function (num) {
  return num > 10;
});

console.log(newNumberFind);

//FindIndex - find the index of the first item that matches.

const newNumberFindIndex = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(newNumberFindIndex);

// CHALLENGE - new array with only meanings to 100 characters

import emojipedia from "./emojipedia";

const meaningArray = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(meaningArray);
