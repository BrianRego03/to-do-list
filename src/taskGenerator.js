import { isToday, isTomorrow } from "date-fns";

const taskGenerate=(arr,status)=>{
    if(status=='Home'){
        return arr;
    }
    else if(status=='Today'){
        return arr.filter((task)=>isToday(task.dueDate));
    }
    else if(status=='Tomorrow'){
        return arr.filter((task)=>isTomorrow(task.dueDate));
    }
    

}

export {taskGenerate};