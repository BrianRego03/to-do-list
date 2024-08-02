import { addTaskButton,removeTaskButton,addButtonActivate } from "./addTaskButton"
import { taskCollector } from ".";


const createForm=(arr,lib)=>{
    removeTaskButton(arr,lib);
    let todoSec=document.querySelector(".todoSection");
    let formDiv=document.createElement("div");
    todoSec.insertBefore(formDiv,todoSec.firstChild);
    formDiv.setAttribute("id","formDivision")
    
    let actualForm=document.createElement("form");
    actualForm.setAttribute("action","#");
    formDiv.appendChild(actualForm);

    let labelTitle=document.createElement("label");
    labelTitle.setAttribute("for","labelTitle");
    labelTitle.innerText="Title:";
    let inputTitle=document.createElement("input");
    inputTitle.setAttribute("type",'text');
    inputTitle.setAttribute("name",'taskTitle');
    inputTitle.setAttribute("id",'labelTitle');
    inputTitle.setAttribute("required",'');
    actualForm.appendChild(labelTitle);
    actualForm.appendChild(inputTitle);



    let labelDueDate=document.createElement("label");
    labelDueDate.setAttribute("for","labelDueDate");
    labelDueDate.innerText="Due date:";
    let inputDueDate=document.createElement("input");
    inputDueDate.setAttribute("type",'date');
    inputDueDate.setAttribute("name",'taskDueDate');
    inputDueDate.setAttribute("id",'labelDueDate');
    inputDueDate.setAttribute("required",'');
    actualForm.appendChild(labelDueDate);
    actualForm.appendChild(inputDueDate);


    let labelProject=document.createElement("label");
    labelProject.setAttribute("for","labelProject");
    labelProject.innerText="Project:";
    let inputProject=document.createElement("select");
    inputProject.setAttribute("name",'taskProject');
    inputProject.setAttribute("id",'labelProject');
    actualForm.appendChild(labelProject);
    actualForm.appendChild(inputProject);

    let projectOption0=document.createElement("option");
    projectOption0.setAttribute("value","");
    projectOption0.innerText="none";
    inputProject.appendChild(projectOption0);

    for(let i=0;i<arr.length;i++){
        let projectOption=document.createElement("option");
        console.log(arr[i]);
        projectOption.setAttribute("value",arr[i]);
        projectOption.innerText=arr[i];
        inputProject.appendChild(projectOption);
    }

    


    let labelDescription=document.createElement("label");
    labelDescription.setAttribute("for","labelDescription");
    labelDescription.innerText="Description:";
    let inputDescription=document.createElement("textarea");
    inputDescription.setAttribute("rows",'5');
    inputDescription.setAttribute("columns",'60');
    inputDescription.setAttribute("name",'taskDescription');
    inputDescription.setAttribute("id",'labelDescription');
    actualForm.appendChild(labelDescription);
    actualForm.appendChild(inputDescription);

    let labelPriority=document.createElement("label");
    labelPriority.setAttribute("for","labelPriority");
    labelPriority.innerText="Priority:";
    let inputPriority=document.createElement("select");
    inputPriority.setAttribute("name",'taskPriority');
    inputPriority.setAttribute("id",'labelPriority');
    actualForm.appendChild(labelPriority);
    actualForm.appendChild(inputPriority);

    let priorityOption1=document.createElement("option");
    priorityOption1.setAttribute("value",1);
    priorityOption1.innerText="Low";
    inputPriority.appendChild(priorityOption1);
    let priorityOption2=document.createElement("option");
    priorityOption2.setAttribute("value",2);
    priorityOption2.innerText="Medium";
    inputPriority.appendChild(priorityOption2);
    let priorityOption3=document.createElement("option");
    priorityOption3.setAttribute("value",3);
    priorityOption3.innerText="High";
    inputPriority.appendChild(priorityOption3);


    let submission=document.createElement("input");
    submission.setAttribute("type","submit");
    submission.setAttribute("value","Add Task");
    submission.setAttribute("id","submit");
    actualForm.appendChild(submission);

    let cancelButton=document.createElement("button");
    cancelButton.setAttribute("type","button");
    cancelButton.setAttribute("id","cancel");
    cancelButton.innerText="Cancel";
    actualForm.appendChild(cancelButton);

    
    cancelButton.addEventListener('click',()=>{
    removeForm(arr,lib);
    
    });

    formSubmission(arr,lib);

}

const removeForm=(arr,lib)=>{
    let todoSec=document.querySelector(".todoSection");
    let formDiv=document.querySelector("#formDivision");
    todoSec.removeChild(formDiv);
    addTaskButton();
    addButtonActivate(arr,lib)

}

export{createForm,removeForm};


const formSubmission=(arr,lib)=>{
    let formSubmit=document.querySelector("form");


formSubmit.addEventListener('submit',function(e){
    e.preventDefault();
    taskCollector(formSubmit[0].value,formSubmit[4].value,formSubmit[1].value,formSubmit[2].value,formSubmit[3].value);
   

});

}