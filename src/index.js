import './style.css';

import { format } from "date-fns";


import {taskSort,indexAssign} from './taskSorter.js'

import {displayArray} from './displayArray.js'

import { taskGenerate } from './taskGenerator.js';

import { clearScreen } from './clearWindow.js';

import { projectAddition,projectDisplay } from './AddProject.js';

import { addTaskButton,removeTaskButton,addButtonActivate } from './addTaskButton.js';

import { createForm,removeForm } from './createTaskForm.js';



let taskLibrary = [];

let pageStatus="Home";

let projectArray=['gym',"study"];

// let completedArray=[];



class Task{
    constructor(title,priority,dueDate,project,description,index){
        this.title=title;
        this.priority=priority;
        this.dueDate=format(dueDate,'PP');
        this.project=project;
        this.description=description;
        this.index=index;
    }

    addTaskToLibrary(){
        taskLibrary[taskLibrary.length]=this;
    }


    }
   


const task1=new Task('HIIT workout',2,new Date(2025, 1, 1),'gym','Madfit workout',0);

const task2=new Task('Linear Algebra',3,new Date(2024, 6, 31),'study','Test tomorrow',1);

const task3=new Task('Algebra',3,new Date(2025, 1, 1),'study','Test tomorrow',2);

task1.addTaskToLibrary();
task2.addTaskToLibrary();
task3.addTaskToLibrary();


taskSort(taskLibrary);
indexAssign(taskLibrary);
displayArray(taskLibrary);
addTaskButton();
addButtonActivate(projectArray,taskLibrary);



let todoSec=document.querySelector(".todoSection");

const homeBtn=document.querySelector("#Home");
homeBtn.addEventListener('click',()=>{
    pageStatus='Home';
    clearScreen(todoSec);
    displayArray(taskLibrary);
    addTaskButton();
    addButtonActivate(projectArray,taskLibrary);
});

const todayBtn=document.querySelector("#Today");
todayBtn.addEventListener('click',()=>{
    pageStatus='Today';
    clearScreen(todoSec);
    displayArray(taskGenerate(taskLibrary,pageStatus));
    addTaskButton();
    addButtonActivate(projectArray,taskLibrary);
});

const tomorrowBtn=document.querySelector("#Tomorrow");
tomorrowBtn.addEventListener('click',()=>{
    pageStatus='Tomorrow';
    clearScreen(todoSec);
    displayArray(taskGenerate(taskLibrary,pageStatus));
    addTaskButton();
    addButtonActivate(projectArray,taskLibrary);
})

const completedBtn=document.querySelector("#Completed");
completedBtn.addEventListener('click',()=>{
    pageStatus='Completed';
    clearScreen(todoSec);
    displayArray(taskGenerate(taskLibrary,pageStatus));
    addTaskButton();
    addButtonActivate(projectArray,taskLibrary);
})


let projectButtonSection=document.querySelector("#buttonSection2");
clearScreen(projectButtonSection);
projectDisplay(projectArray,taskLibrary);




const addActivate=(arr,lib)=>{
    const addProjectBtn=document.querySelector("#AddProject");
    addProjectBtn.addEventListener('click',()=>{
    projectAddition(arr,lib);    
    
    
   

})
}
addActivate(projectArray,taskLibrary);

export {addActivate}


const taskCollector=(a,p,b,c,d)=>{
    const Taskz= new Task(a,p,b,c,d,0);
    Taskz.addTaskToLibrary();
    taskSort(taskLibrary);
    indexAssign(taskLibrary);
    clearScreen(todoSec);
    displayArray(taskLibrary);
    addTaskButton();
    addButtonActivate(projectArray,taskLibrary);

}

export {taskCollector};

// localStorage.setItem("completedArray",  JSON.stringify(taskLibrary));
// let z =JSON.parse(localStorage.getItem("completedArray"));
// console.log(z);
//     displayArray(taskGenerate(taskLibrary,pageStatus));

function libraryUpdater(arr){
    
    taskLibrary=arr;

}

function libraryImporter(){
    return taskLibrary;
}

export {libraryUpdater,libraryImporter};