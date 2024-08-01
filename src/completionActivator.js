
import { libraryUpdater,completedStorage } from ".";


localStorage.setItem("completedArray",JSON.stringify([]));

function completionActivate(lib){
    let completebtn= document.querySelectorAll(".checkStyling");
    let todoSec=document.querySelector(".todoSection");

    for(let checker of completebtn){
        checker.addEventListener('click',()=>{
            let childCompletion=document.getElementById(`todos${checker.id.slice(10)}`);
            let counter=checker.id.slice(10);          
            todoSec.removeChild(childCompletion);
            
            lib=lib.map((tasks)=>{
                if((tasks.index)==counter){
                    tasks.project='Completed';
                    completedStorage(tasks);

                    return tasks;
                }
                else return tasks;

            });
            

            lib=lib.filter((task)=>{
                if((task.index)!=counter){
                    
                    return 1;
                }
                else {
                    return 0;}
            });
            console.log(lib);
            libraryUpdater(lib);
            // let y;
            // [y]=
            

          

            
            
            
            // let z =JSON.parse(localStorage.getItem("completedArray"));
            // z[z.length]=y;
            // localStorage.setItem("completedArray",JSON.stringify(z));
            // console.log(JSON.parse(localStorage.getItem("completedArray")))
            
        })
    }
}

// function idAssign()

export {completionActivate};