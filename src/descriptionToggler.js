
const descriptionActivate=()=>{
    let descriptionbtn= document.querySelectorAll(".descriptStyling");


    for(let descriptor of descriptionbtn){
        descriptor.addEventListener('click',()=>{
            console.dir(descriptor);
            let counter=descriptor.id.slice(14);
            console.log(descriptor.id.slice(14));
            let descriptionDiv=document.getElementById(`description${counter}`);
            if(descriptionDiv.classList.contains("hide")){
                descriptionDiv.setAttribute("class","show");
            }
            else descriptionDiv.setAttribute("class","hide");
            
            

            
        });
    }
}

export{descriptionActivate};

