const nameBox = document.querySelector(".name-box");
const nameBoxInput = document.querySelector(".name-box__input");

const toDo = document.querySelector("div.to-do");
const toDoText = document.querySelector(".to-do__user-name");

const CLASSHIDDEN = "hidden";

function setUserName(event) {
    event.preventDefault();

    let userName = nameBoxInput.value;

    window.localStorage.setItem("name", userName);

    nameBox.classList.toggle(CLASSHIDDEN);
    toDo.classList.toggle(CLASSHIDDEN);
    toDoText.innerText = `Hi, ${userName}!`;
}

function getUserName() {
    const storedName = window.localStorage.getItem("name");

    if (storedName === null) { // LocalStorage 에 이름이 저장 안 되어있는 경우
        // form 은 지우고, 새로운 내용 생성하기. toggle 을 이용하자
        nameBox.addEventListener("submit", setUserName);
        nameBox.classList.remove(CLASSHIDDEN);
        toDo.classList.add(CLASSHIDDEN);
    } else { // 이름이 저장된 경우
        nameBox.classList.add(CLASSHIDDEN);
        toDo.classList.remove(CLASSHIDDEN);
        toDoText.innerText = `Hi, ${storedName}!`;
    }
}

function clearValue(params) {
    nameBoxInput.value = ""
}

window.addEventListener("onload", clearValue);
getUserName();

