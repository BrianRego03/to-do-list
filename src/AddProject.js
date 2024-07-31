import { clearScreen } from "./clearWindow";


const projectAddition=(arr)=>{
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

    projInputBtn.addEventListener('click',()=>{
        if(projectInput.value==''){
            return;
        }
        else if(IsInArray(projectInput.value)){
            return
        }
        else {
            arr[arr.length]=projectInput.value;
            console.log(arr);
            projectDisplay(arr);
            

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

const projectDisplay=(arr)=>{
    let projectButtonSection=document.querySelector("#buttonSection2");
    const addButtonSection=document.querySelector("#projectInput");

    clearScreen(projectButtonSection);

    for(let i=0;i<arr.length;i++){
        let newProjectButton=document.createElement("button");
        newProjectButton.innerText=arr[i];
        newProjectButton.setAttribute("class","projectButton");
        projectButtonSection.appendChild(newProjectButton);
        


    }

    clearScreen(addButtonSection);
    
    let addButton= document.createElement("button");
    addButton.setAttribute("id","AddProject");
    addButton.innerText="Add Project";
    addButtonSection.appendChild(addButton);

    addButton.addEventListener('click',()=>{
        projectAddition(arr); 
    })
}

export {projectAddition}; 

