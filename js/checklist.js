'use strict'


const addBtn = document.querySelector("#addbtn");
const inputBox = document.querySelector("#checklist-add");
const list = document.querySelector(".form-check");
const form = document.querySelector("#input-form");
const div = document.querySelector('.checkbox-container');
const key = 'check-input';
const check = document.querySelector('#checkbox');


// get value from local stroage
function getValue () {
    if (localStorage.getItem('key') === null) {
    key = [];
}   else {
    key=JSON.parse(localStorage.getItem('key'));}
}

function lacateValue () {
    let valueHTML ='';
    key.map((check) => {
    valueHTML +=`
    <div class="form-check"> 
    ${check.check}
    ${check.value} <i class="fas fa-trash"></i></div>`;
    value.innerHTML = valueHTML;
});
}

// Store value
function storeValue (check) {
    if (localStorage.getItem('key') === null) {
    key = [];
}   else {
    key=JSON.parse(localStorage.getItem('key'));}
key.push(check)
localStorage.setItem('key', JSON.stringify(key));
}

// Add checklist value
function addValue (e) {
    e.preventDefault (); 
    if (inputBox.value ==='') {
    alert('add checklist');
    }else{
    const checkValue = inputBox.value;
    const textNode = `<div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="checkbox_2"> ${checkValue} <i class="fas fa-trash"></i></div>`;
    div.appendChild(document.createTextNode(textNode))
}}

function loadEvenetlistners () {

    document.addEventListener('DOMContedntLoaded', getValue);
    addBtn.addEventListener ('click', addValue);

}

loadEvenetlistners();
