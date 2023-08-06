let tasksArray = document.querySelector(".tasks")
let sortByPriority = false;
function updateTasks(){
    let tasks = document.querySelectorAll('.task')
    tasks.forEach((task) => {
        task.addEventListener("click", (e) => {
            console.log(e.target.id)
            deleteTasks(e.target.id)
        })
    })
}
function displayTasks(currentTasks){
    let displayStr = "";

    for(let i = 0 ; i < currentTasks.length;i++){
        displayStr += `<span class="task" id=${i}>${currentTasks[i].taskname}
        <span >P${currentTasks[i].taskpriority}</span>
        </span>
        `
    }

    tasksArray.innerHTML = displayStr
}

let addTask = (taskname,taskpriority)=>{
    let currentTasks = JSON.parse(localStorage.getItem("todos")) !== null ? JSON.parse(localStorage.getItem("todos")):[]
    console.log("currentTasks:",currentTasks);
    taskpriority = +taskpriority;
    currentTasks.push({taskname,taskpriority});
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
        localStorage.setItem("todos", JSON.stringify(currentTasks))
        if(sortByPriority===true){
            prioritySort(currentTasks)
        }
        else{

            displayTasks(currentTasks)
        }
        updateTasks();
    }, 500);
    


}


function prioritySort(currentTasks){
    sortByPriority = true;
    let newlist = currentTasks.sort((a, b) => a.taskpriority - b.taskpriority);

displayTasks(newlist)
}

function lastAdded(){
    sortByPriority = false;
    let currentTasks = JSON.parse(localStorage.getItem("todos")) !== null ? JSON.parse(localStorage.getItem("todos")) : []
    displayTasks(currentTasks)
}

export {addTask,displayTasks,deleteTasks,updateTasks,prioritySort,lastAdded}