let tasksArray = document.querySelector(".tasks")

function updateTasks(){
    let tasks = document.querySelectorAll('.task')
    tasks.forEach((task) => {
        console.log(task)
        task.addEventListener("click", (e) => {
            console.log(e.target.id)
            deleteTasks(e.target.id)
        })
    })
}
function displayTasks(currentTasks){
    let displayStr = "";

    for(let i = 0 ; i < currentTasks.length;i++){
        displayStr += `<span class="task" id=${i}>${currentTasks[i]}
        </span>
        `
    }

    tasksArray.innerHTML = displayStr
}

let addTask = (taskname)=>{
    let currentTasks = JSON.parse(localStorage.getItem("todos")) !== null ? JSON.parse(localStorage.getItem("todos")):[]
    console.log("currentTasks:",currentTasks);
    currentTasks.push(taskname);
    localStorage.setItem("todos",JSON.stringify(currentTasks))
    
    displayTasks(currentTasks);
    updateTasks();
    

}

function deleteTasks(id){
    console.log(typeof id);
    let currentTasks = JSON.parse(localStorage.getItem("todos")) !== null ? JSON.parse(localStorage.getItem("todos")) : []
    currentTasks.splice(+id,1);

    document.getElementById(`${id}`).classList.add('removeTask')

    setTimeout(() => {
        displayTasks(currentTasks)
        localStorage.setItem("todos", JSON.stringify(currentTasks))
        updateTasks();
    }, 1000);
    


}

export {addTask,displayTasks,deleteTasks,updateTasks}