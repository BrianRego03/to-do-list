const clearScreen=()=>{

    let todoSec=document.querySelector(".todoSection");
    while (todoSec.hasChildNodes()) {
        todoSec.removeChild(todoSec.firstChild);
      }

}

export {clearScreen};