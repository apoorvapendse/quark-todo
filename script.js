let addTaskButton = document.getElementById("add-task-btn")
let taskFormContainer = document.getElementById("task-form-container")
let tasklist = document.getElementById("task-container")
let taskform = document.getElementById("task-form")

// adding event listener to show and hide task adder window 
addTaskButton.addEventListener("click",()=>{

    taskFormContainer.classList.toggle("active");
    tasklist.classList.toggle("hide");
})

//handling form submission
add