'use strict'


const addBtn = document.querySelector("#addbtn");
const inputBox = document.querySelector("#checklist-add");
const list = document.querySelector(".form-check");
const form = document.querySelector("#input-form");
const div = document.querySelector('.checkbox-container');
const check = document.querySelector('#checkbox');




// Add checklist value
function addValue (e) {
    e.preventDefault (); 
    if (inputBox.value ==='') {
    alert('add checklist');
    }else{
    const checkValue = inputBox.value;
    const list = document.createElement('div');
    saveLocalTodos(inputBox.value); 
    list.className = 'checkbox-container'
    list.innerHTML = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox">
    <label>${checkValue} </label>
    <span><i class="fas fa-trash"></i></span>
    </div>`;
    check.appendChild(list)
    
}}

// Delete Task

function deleteValue (e) {
    if (e.target.classList.contains('delete-icon')){
    e.target.parentElement.remove();}

}

// Save to Localstorage
function saveLocalTodos (todo) {
    let key;
    if (localStorage.getItem('key') === null) {
    key = [];
}   else {
    key=JSON.parse(localStorage.getItem('key'));}
    key.push(todo)
    localStorage.setItem("key", JSON.stringify(key));  
}






function loadEvenetlistners () {

    // document.addEventListener('DOMContedntLoaded', getValue);
    addBtn.addEventListener ('click', addValue);
    
    check.addEventListener('click', deleteValue);

}

loadEvenetlistners();

