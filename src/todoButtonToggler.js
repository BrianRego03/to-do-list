

const todoButtonEnable=()=>{
    const allButtons = todoSec.getElementsByTagName("button");
    for (const button of allButtons) {
        button.disabled = true;
        }
    }

const todoButtonDisable=()=>{
    const allButtons = todoSec.getElementsByTagName("button");
    for (const button of allButtons) {
        button.disabled = false;
        }
    }    


export{todoButtonDisable,todoButtonEnable};