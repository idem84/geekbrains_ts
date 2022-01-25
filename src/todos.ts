export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const allTodos: Map<number, TodoResponse> = new Map<number, TodoResponse>();

function getNumber(list: Map<number, TodoResponse>, num: number) {
  const myNum: TodoResponse[] = [];
  if (num <= 0) {
    return "You have no todos";
  } else {
    for (let i = 1; i <= num && i <= list.size; i++) {
      myNum.push(list.get(i));
    }
  }
  if (!myNum) {
    throw Error("Nothing there");
  }
  return myNum;
}

export function getTodosInfo(counter) {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.text())
    .then<TodoResponse[]>((responseText) => {
      return JSON.parse(responseText);
    })
    .then((responseArray) => {
      for (let i = 0; i < responseArray.length; i++) {
        allTodos.set(i + 1, responseArray[i]);
      }
      console.log("Our Todo list - ", getNumber(allTodos, counter));
    });
}
