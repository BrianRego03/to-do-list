const clearScreen=(inputNode)=>{

    
    while (inputNode.hasChildNodes()) {
      inputNode.removeChild(inputNode.firstChild);
      }

}

export {clearScreen};