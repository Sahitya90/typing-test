import React, { useState } from 'react'
import './data.css'



  export const text = [

    "morning sunlight filtered through curtains as she planned her journey forward embracing uncertainty with courage hope and quiet determination today",
    "a distant train echoed across the valley reminding him of unfinished dreams and places he promised himself he would visit someday",
    "the old library smelled of dust and forgotten stories yet every shelf whispered secrets waiting patiently for curious minds to listen closely",
    "she laughed under neon lights feeling alive in fleeting moments that stitched together memories brighter than any carefully planned future ahead",
    "waves crashed endlessly against the shore teaching him persistence and resilience as each retreat prepared another determined return toward the waiting sand",
    "the city never truly slept instead it hummed softly carrying millions of stories intertwining briefly before drifting apart like passing clouds above",
    "he scribbled ideas on napkins convinced that even the smallest thoughts could someday transform into something meaningful and lasting for others",
    "under starlit skies they shared dreams that felt impossibly large yet somehow reachable when spoken aloud with unwavering belief and trust together",
    "the worn guitar carried melodies shaped by years of longing joy and heartbreak each note echoing pieces of a life fully lived",
    "time moved quietly through the room unnoticed until memories surfaced reminding everyone how fleeting even the most ordinary days could truly become"
  ];

  

  export const getRandomParagraph = () => {
      const randomIndex = Math.floor(Math.random() * text.length);

      return text[randomIndex];
    };
    

  
const Data = ({targetText, userInput}) =>{

  const targetWords =  targetText.split(" ") || [];
  const userWords = userInput.split(" ") || [];

  
  return (
    <div>
      <div className="reading">
        <p>{targetWords.map((targetWord, index) => {

          //start with an empty status
          let statusClass = "";

          //checking if the user has already visited it or not
          if(index < userWords.length){
            //if it has thenm we save the word that he has wrote so that we can grade it
            const typedWord = userWords[index];

            //targets the very last word in the user's typed array
            if(index === userWords.length-1){
              statusClass = "word-active";

              //when the word is still active but they have done a typo in real time
              if(!targetWord.startsWith(typedWord)){
                statusClass = "word-incorrect-live";
              }
            }
            //if the word is not active anymore, then now we grade this word
            else if(typedWord === targetWord){
              statusClass = "word-correct";
            }else{
              statusClass = "word-incorrect";
            }
          }
          return(
            <span key={index} className={`word ${statusClass}`}>
              {targetWord}{" "}
            </span>
          );
        })}
        </p>
      </div>
    </div>
  )
}


export default Data
