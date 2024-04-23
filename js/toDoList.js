const toDoForm = document.querySelector(".to-do__form");
const toDoInput = document.querySelector(".to-do__input");
const toDoList = document.querySelector(".to-do__list");

let todos = [];

function handleSubmit(event) {
  event.preventDefault();

  const todoValue = toDoInput.value;

  toDoInput.value = "";

  const newToDoObj = {
    id: Date.now(),
    todo: todoValue,
  };

  todos.push(newToDoObj);
  printToDo(newToDoObj);
  setToDo();
}

function setToDo() {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

function printToDo(todos) {
  // <ul> 내부에 <li> 을 추가해서 보여주는 형식.
  // list item 생성
  let item = document.createElement("li");
  // css id 를 부여
  item.setAttribute("id", todos["id"]);
  // css class 부여
  item.setAttribute("class", "to-do__item");

  let btn = document.createElement("button");
  btn.setAttribute("class", "to-do__remove");
  btn.addEventListener("click", deleteToDo);

  let itemContent = document.createTextNode(todos["todo"]);
  let btnContent = document.createTextNode("✖️");

  btn.appendChild(btnContent);
  item.appendChild(itemContent);
  item.appendChild(btn);

  toDoList.appendChild(item);
}

function deleteToDo(event) {
  // 버튼 click이 일어나면 remove
  const li = event.target.parentElement;

  li.remove();

  // todos 에서 li 가 같은 경우 를 제외해서 다시 등록하면 될 것이다!
  todos = todos.filter((todo) => todo["id"] !== parseInt(li.id));

  setToDo();
}

// function isRightContent(params) {}
toDoForm.addEventListener("submit", handleSubmit);

const storedTodos = window.localStorage.getItem("todos"); // 여기서 문자열이 됨.

if (storedTodos !== null) {
  const parsedTodos = JSON.parse(storedTodos);
  todos = parsedTodos; // String -> 배열

  parsedTodos.forEach(printToDo);
}
