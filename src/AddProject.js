import { clearScreen } from "./clearWindow";

import { displayArray } from "./displayArray";

import { taskGenerate } from "./taskGenerator";

import { addActivate,libraryImporter,projectArrayExporter } from ".";

import { addTaskButton,addButtonActivate } from "./addTaskButton";


const projectAddition=(arr,lib)=>{
    arr=projectArrayExporter();
    const addProjectBtn=document.querySelector("#AddProject");

    const addButtonSection=document.querySelector("#projectInput");

    clearScreen(addButtonSection);

    const projectInput=document.createElement("input");
    const projInputBtn=document.createElement("button");

    projectInput.setAttribute("id","projInput");
    projectInput.setAttribute("maxlength","8")
    projInputBtn.setAttribute("id","projInpBtn");
    projInputBtn.innerText="Add";

    


    addButtonSection.appendChild(projectInput);
    addButtonSection.appendChild(projInputBtn);

    let projectButtonSection=document.querySelector("#buttonSection2");

    projInputBtn.addEventListener('click',()=>{
        if(projectInput.value==''){
            return ;
        }
        else if(IsInArray(projectInput.value)){ 
            return ;
        }
        else {
            arr[arr.length]=projectInput.value;
           
            projectDisplay(arr,lib);
            
            attachAddButton();
            addActivate(arr,lib);
                    

        }

    })
    

    const IsInArray=(val)=>{
        for(let j=0;j<arr.length;j++){
            if (arr[j]==val){
                return 1;
            }
        }
        return 0;
    }
}

const projectDisplay=(arr,lib)=>{
    let projectButtonSection=document.querySelector("#buttonSection2");
    
    
    clearScreen(projectButtonSection);
    for(let i=0;i<arr.length;i++){
        let newProjectButton=document.createElement("button");
        newProjectButton.innerText=arr[i];
        newProjectButton.setAttribute("class","projectButton");
        projectButtonSection.appendChild(newProjectButton); 
        


    }
    projectActivate(arr,lib);

}

function projectActivate(arr,lib){
    const projectBtn=document.querySelectorAll(".projectButton");
    let todoSec=document.querySelector(".todoSection");
    for(let currentProject of projectBtn){
        currentProject.addEventListener('click',()=>{
            
            clearScreen(todoSec);

            arr=libraryImporter();
            
            displayArray(taskGenerate(lib,currentProject.innerHTML));
            addTaskButton(); 
            arr=projectArrayExporter();
            addButtonActivate(arr,lib);              
        });
    }
    
}


const attachAddButton=()=>{
    const addButtonSection=document.querySelector("#projectInput");

    clearScreen(addButtonSection);
    
    let addButton= document.createElement("button");
    addButton.setAttribute("id","AddProject");
    addButton.innerText="Add Project";
    addButtonSection.appendChild(addButton);

}



export {projectAddition,projectDisplay,attachAddButton}; 

