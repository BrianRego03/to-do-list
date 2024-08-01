import { indexAssign } from "./taskSorter";



function deletionActivate(lib){
    let deletebtn= document.querySelectorAll(".deleteStyling");
    let todoSec=document.querySelector(".todoSection");

    for(let deletor of deletebtn){
        deletor.addEventListener('click',()=>{
            let childDeletion=document.getElementById(`todos${deletor.id.slice(12)}`);
            console.log(deletor.id.slice(12));
            todoSec.removeChild(childDeletion);
            lib.splice(`${deletor.id.slice(12)}`,1);
            indexAssign(lib);
            
        })
    }
}

export {deletionActivate};