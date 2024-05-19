const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

let toDos = []; //재할당 나중에 할 거여서 const 말고 let

function editToDo(event) {
    const li = event.target.parentElement;
    const span = li.querySelector("span");
    const newText = prompt("Edit the to-do:", span.innerText);
    if (newText !== null && newText.trim() !=="") {
        //취소하지 않고 내용을 입력했을 때만 수정
        const todoId = parseInt(li.id);
        toDos = toDos.map((toDo) => {
            if (toDo.id === todoId) {
                toDo.text = newText;
            }
            return toDo;
        });
        span.innerText = newText;
        saveToDos();
    }

}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    //li의 id는 string이기에 int로 형변환
    // li의 id와 toDo의 id가 다를 때 toDo 배열에 추가
    saveToDos();
}

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button"); //수정 버튼 생성

    li.id = newToDo.id;
    span.innerText = newToDo.text;
    deleteButton.innerText = "X";
    editButton.innerText="Edit";

    deleteButton.className = "button-name";
    editButton.className = "button-name";

    deleteButton.addEventListener("click", deleteToDo);
    editButton.addEventListener("click", editToDo);

    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
}

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);