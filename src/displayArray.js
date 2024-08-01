const displayArray=(arr)=>{
    let todoSec=document.querySelector(".todoSection");
    console.dir(todoSec);

    for(let i=0;i<arr.length;i++){
        let todoSecChild=document.createElement('div');
        todoSec.appendChild(todoSecChild);
        todoSecChild.classList.add("todoStyle");
        
        let checkButton=document.createElement("button");
        todoSecChild.appendChild(checkButton);
        checkButton.setAttribute("id",`todoButton${arr[i].index}`);
        checkButton.classList.add("checkStyling");

        let checkSVG=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Task Complete</title><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>`;
        checkButton.innerHTML=checkSVG;

        let titleDiv=document.createElement("div");
        titleDiv.classList.add("titleStyling");
        titleDiv.innerText=arr[i].title;
        todoSecChild.appendChild(titleDiv);
        

        let dateDiv=document.createElement("div");
        dateDiv.classList.add("dateStyling");
        dateDiv.innerText=arr[i].dueDate;
        todoSecChild.appendChild(dateDiv);

        let modifyDiv=document.createElement("div");
        todoSecChild.appendChild(modifyDiv);
        modifyDiv.classList.add("modifyContainer");

        let editButton=document.createElement("button");
        modifyDiv.appendChild(editButton);
        editButton.setAttribute("id",`editButton${arr[i].index}`);
        editButton.classList.add("editStyling");

        let editSVG=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit Task</title><path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>`
        editButton.innerHTML=editSVG;

        
       


        let deleteButton=document.createElement("button");
        modifyDiv.appendChild(deleteButton);
        deleteButton.setAttribute("id",`deleteButton${arr[i].index}`);
        deleteButton.classList.add("deleteStyling");

        let deleteSVG=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete Task</title><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`;
        deleteButton.innerHTML=deleteSVG;

        if((arr[i].priority)==3){
            todoSecChild.classList.add("redAlert");

        }
        else if((arr[i].priority)==2){
            todoSecChild.classList.add("yellowAlert");

        }
        else {
            todoSecChild.classList.add("greenAlert");

        }
    }  

}

export {displayArray};