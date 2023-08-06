import {addTask, deleteTasks, displayTasks, updateTasks,prioritySort,lastAdded} from './functions.js';
let addTaskButton = document.getElementById("add-task-btn")
let taskFormContainer = document.getElementById("task-form-container")
let tasklist = document.getElementById("task-container")
let taskform = document.getElementById("task-form")
let priorityEl = document.getElementById("priority") 

let sortByPriorityElement = document.getElementById("priority-btn")
let lastAddedSort = document.getElementById("last-added-btn")

//displaying previously added tasks 
let currentTasks = JSON.parse(localStorage.getItem("todos")) !== null ? JSON.parse(localStorage.getItem("todos")) : []
displayTasks(currentTasks)

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
    tasklist.classList.toggle("hide")
   
    if(taskInput.value!==""){
        addTask(taskInput.value, priorityEl.value)
    }
    

})

sortByPriorityElement.addEventListener("click",()=>{
    let currentTasks = JSON.parse(localStorage.getItem("todos")) !== null ? JSON.parse(localStorage.getItem("todos")) : []
    prioritySort(currentTasks);
    updateTasks();
})

lastAddedSort.addEventListener("click",()=>{
    lastAdded();
})

updateTasks();