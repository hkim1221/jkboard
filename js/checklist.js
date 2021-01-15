'use strict'


const addBtn = document.querySelector("#addbtn");
const inputBox = document.querySelector("#checklist-add");
const formCheck = document.querySelector(".form-check");
const form = document.querySelector("#input-form");
const div = document.querySelector('.checkbox-container');
const check = document.querySelector('#checkbox');
const deltecon = document.querySelector('.delete-icon');
const checkBox = document.getElementById("checkbox-input");
const checkBoxLabel = document.getElementById("checklabel");
const checkOne = document.querySelectorAll('input[type=checkbox]');
const checklabel = document.getElementById("new-task-checklist");


// Add checklist value
function addValue(e) {
    e.preventDefault();
    if (inputBox.value === '') {
        alert('add checklist');
    } else {
        const checkValue = inputBox.value;
        const list = document.createElement('div');
        saveLocalTodos(inputBox.value);
        list.id = 'checkbox'
        list.className = 'checkbox-container'
        list.innerHTML = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox-input">
    <label class="form-check-label" id="checklabel new-task-checklist">${checkValue} </label>
    <i class="fas fa-trash" id="delbtn"></i>
    </div>`;

    check.appendChild(list)
    inputBox.value ="";
    }
}

// Delete Task

function deleteValue(e) {
    const item = e.target;
    const todo = item.parentElement;
    if (item.classList.contains("fas", "fa-trash")) {
        removeLocalTodos(todo);
        todo.remove();
        console.log(item.classList)
    }
}


// Save to check localstorage

// function saved() {
//     let i;
//     for (i = 0; i < checkOne.length; i++) {
//         localStorage.setItem(checkOne[i].value, checkOne[i].checked);
//     }
// }

// function load() {
//     let i;
//     for (i = 0; i < checkOne.length; i++) { 
//         checkOne[i].checked = localStorage.getItem(checkOne[i].value) === "true" ? true : false;
//     }
// }



// Save to Localstorage
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos));

}


function saveCheck() {
    localStorage.setItem("checkbox-input", checkBox.checked);
    const checked = JSON.parse(localStorage.getItem("checkbox-input"));
    checkBox.checked = checked;
}


function getTodo() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo){
        const checkValue = inputBox.value;
        const list = document.createElement('div');
        list.id = 'checkbox'
        list.className = 'checkbox-container'
        list.innerHTML = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox-input">
    <label class="form-check-label" id="checklabel">${checkValue} </label>
    <i class="fas fa-trash" id="delbtn"></i>
    </div>`;

        check.appendChild(list)
    });
}



function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex= todo.children[1].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}




function loadEvenetlistners() {

    // document.addEventListener('DOMContedntLoaded', getValue);
    addBtn.addEventListener('click', addValue);
    document.addEventListener('DOMContentLoaded', getTodo)
    check.addEventListener('click', deleteValue);
    checkBox.addEventListener('click',saved, false);
}

window.onload = load;
loadEvenetlistners();

