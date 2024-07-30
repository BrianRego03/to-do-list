import './style.css';

import { format } from "date-fns";
import { compareAsc } from "date-fns";
import { isTomorrow } from "date-fns";
import { isToday } from "date-fns";


const taskLibrary = [];

class Task{
    constructor(title,priority,dueDate,project,description){
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
   


const task1=new Task('HIIT workout',2,new Date(2025, 1, 1),'gym','Madfit workout');

const task2=new Task('Linear Algebra',3,new Date(2024, 6, 31),'study','Test tomorrow');

task1.addTaskToLibrary();
task2.addTaskToLibrary();

console.log(taskLibrary);