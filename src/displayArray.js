const displayArray=(arr)=>{
    let todoSec=document.querySelector(".todoSection");
    console.dir(todoSec);

    for(let i=0;i<arr.length;i++){
        let todoSecChild=document.createElement('div');
        todoSecChild.innerText=arr[i].title;
        todoSec.appendChild(todoSecChild);
        todoSecChild.classList.add("todoStyle");
    }

}

export {displayArray};