import {addTask} from './functions.js';
let addTaskButton = document.getElementById("add-task-btn")
let taskFormContainer = document.getElementById("task-form-container")
let tasklist = document.getElementById("task-container")
let taskform = document.getElementById("task-form")


let taskInput = document.getElementById("task-name")
// adding event listener to show and hide task adder window 
addTaskButton.addEventListener("click",()=>{

    taskFormContainer.classList.toggle("active");
    tasklist.classList.toggle("hide");
})



//handling form submission
taskform.addEventListener("submit",(e)=>{
    e.preventDefault();
    taskFormContainer.classList.toggle("active");
    tasklist.classList.toggle("hide");
   
    addTask(taskInput.value)
    

})