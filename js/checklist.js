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

// Add checklist value
function addValue(e) {
    e.preventDefault();
    if (inputBox.value === '') {
        alert('add checklist');
    } else {
        const checkValue = inputBox.value;
        const list = document.createElement('div');
        saveLocalTodos(inputBox.value);
        list.className = 'checkbox-container'
        list.innerHTML = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox-input">
    <label class="form-check-label" id="checklabel">${checkValue} </label>
    <i class="fas fa-trash" id="delbtn"></i>
    </div>`;
        check.appendChild(list)

    }
}

// Delete Task

function deleteValue(e) {
    const item = e.target;
    if (item.classList.contains("fas", "fa-trash")) {
        const checkli = item.parentElement;
        checkli.remove();
    }

}


check.addEventListener('change', function() {
    checkBoxLabel.style.textDecoration = checkBox.checked ? 'line-through' : 'none';

});


// check.addEventListener('click', function(e) {

//     if (e.target.checked === true) {
//         console.log('checked')
//         checkBoxLabel.style.textDecoration = "line-through";
//     }else {
//         console.log('not checked')
//         checkBoxLabel.style.textDecoration = "";
//     }
// });




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






function loadEvenetlistners() {
    const list = document.createElement('div');

    // document.addEventListener('DOMContedntLoaded', getValue);
    addBtn.addEventListener('click', addValue);

    check.addEventListener('click', deleteValue);

}

loadEvenetlistners();

