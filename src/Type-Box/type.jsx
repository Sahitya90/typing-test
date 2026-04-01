import React from 'react'
import './type.css'

const type = ({userInput, handleTyping, restartHandler}) => {
  //here in this arrow function we are accepting userInput and handleTyping
  // as props from the parent file

  

  return (
    <div>
        <textarea name="text"
         placeholder='Start Typing here'
           className='text-area'
           value = {userInput} //this determines the value, and connects the box to the parent's memory
           onChange={handleTyping} //tells the parent every time a key is pressed
           autoFocus
           >
            
        </textarea>
        
      
    </div>
  )
}

export default type;
