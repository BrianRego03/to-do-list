import { libraryUpdater,libraryImporter } from ".";



function descriptionActivate(){
    let titlebtn= document.querySelectorAll(".titleStyling");
    let todoSec=document.querySelector(".todoSection");
    // for(let titler of titlebtn){
    //     titler.addEventListener('toggle',()=>{
    //         console.log("testing");

    //     })
    
    // }
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("titleStyling")) {
          console.log("hey! I got a new complaint");
        }
      });

}

export{descriptionActivate};