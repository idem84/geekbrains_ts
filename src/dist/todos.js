"use strict";
exports.__esModule = true;
exports.getTodosInfo = void 0;
var allTodos = new Map();
function getNumber(list, num) {
  var myNum = [];
  if (num <= 0) {
    return "You have no todos";
  } else {
    for (var i = 1; i <= num && i <= list.size; i++) {
      myNum.push(list.get(i));
    }
  }
  if (!myNum) {
    throw Error("Nothing there");
  }
  return myNum;
}
function getTodosInfo(counter) {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      return response.text();
    })
    .then(function (responseText) {
      return JSON.parse(responseText);
    })
    .then(function (responseArray) {
      for (var i = 0; i < responseArray.length; i++) {
        allTodos.set(i + 1, responseArray[i]);
      }
      console.log("Our Todo list - ", getNumber(allTodos, counter));
    });
}
exports.getTodosInfo = getTodosInfo;
