import './style.css';

import { format } from "date-fns";
import { compareAsc } from "date-fns";
import { isTomorrow } from "date-fns";
import { isToday } from "date-fns";

import {taskSort,indexAssign} from './taskSorter.js'

import {displayArray} from './displayArray.js'


const taskLibrary = [];

class Task{
    constructor(title,priority,dueDate,project,description,index){
        this.title=title;
        this.priority=priority;
        this.dueDate=format(dueDate,'PP');
        this.project=project;
        this.description=description;
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
console.log(taskLibrary);