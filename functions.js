let tasksArray = document.querySelector(".tasks")


let addTask = (taskname)=>{
    let currentTasks = JSON.parse(localStorage.getItem("todos")) !== null ? JSON.parse(localStorage.getItem("todos")):null
    console.log("currentTasks:",currentTasks)
}

export {addTask}