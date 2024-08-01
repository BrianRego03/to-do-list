import { libraryUpdater } from ".";



function deletionActivate(lib){
    let deletebtn= document.querySelectorAll(".deleteStyling");
    let todoSec=document.querySelector(".todoSection");

    for(let deletor of deletebtn){
        deletor.addEventListener('click',()=>{
            let childDeletion=document.getElementById(`todos${deletor.id.slice(12)}`);
            console.log(deletor.id.slice(12));
            todoSec.removeChild(childDeletion);
            let counter= deletor.id.slice(12);
            lib=lib.filter((task)=>{
                if((task.index)!=counter){
                    console.log(task.index);
                    return 1;
                }
                else return 0;
            });
            libraryUpdater(lib);
        })
    }
}

export {deletionActivate};