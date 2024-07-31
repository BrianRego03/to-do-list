const addTaskButton=()=>{    
    let todoSec=document.querySelector(".todoSection");
    const addTaskDiv=document.createElement("div");
    const addTask=document.createElement("button");
    addTask.setAttribute("id","addTaskButton");
    addTaskDiv.setAttribute("id","addTaskDiv");
    addTask.innerText="Add new Task";
    todoSec.appendChild(addTaskDiv);
    addTaskDiv.appendChild(addTask);
}

const removeTaskButton=()=>{
    let todoSec=document.querySelector(".todoSection");
    let taskDiv=document.querySelector("#addTaskDiv");
    todoSec.removeChild(taskDiv);
}

export{addTaskButton,removeTaskButton}