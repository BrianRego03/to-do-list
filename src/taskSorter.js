import { compareAsc } from "date-fns";

const taskSort=(arr)=>{

    for(let j=(arr.length-1);j>0;j--){
        for(let i=(arr.length-1);i>0;i--){
            console.log((compareAsc(arr[i-1].dueDate,arr[i].dueDate)));

            if((compareAsc(arr[i-1].dueDate,arr[i].dueDate))==1)
            {
                let c={};
                c=arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=c;

            }
                
            else if((compareAsc(arr[i-1].dueDate,arr[i].dueDate))==0)
            {
                if (arr[i].priority>arr[i-1].priority){
                    let c={};
                    c=arr[i];
                    arr[i]=arr[i-1];
                    arr[i-1]=c;
                }
            }
            else continue;
        }
    }

}



export {taskSort};