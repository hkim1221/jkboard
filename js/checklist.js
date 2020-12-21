const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const formGroup = document.querySelector(".form-group");
const checkBox = document.querySelector(".checkbox-container")

// Adding input 
inputBox.onkeyup = () => {
    let userData = inputBox.value; 
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }else {
        addBtn.classList.remove("active");
    }
    if(userdata == null){
        return userdata;
    }
}

showTasks();
//   When user click add button

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo"); 
    if(getLocalStorage == null){
listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}


// Showing Tasks add tasks
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); 
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    let newTaskTag = '';
    listArr.forEach((element, index) => {
        newTaskTag += `<div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="checkbox_2"> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span> </div>`;
    });
    checkBox.innerHTML = newTaskTag;
    inputBox.value="";
}

// Delete Tasks
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo"); 
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    // after remove update local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}