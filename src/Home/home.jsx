import React, { useState, useEffect } from 'react'
import './home.css'
import Navbar from './../Navbar/Navbar'
import Data, {getRandomParagraph} from '../Data-box/data'
import Text from '../Type-Box/type'
import Stats from '../Stats/Stats'



const Home = () => {

  // the memory lives here in the  parent
  const [userInput, setUserInput] = useState("");
  //state to store the paragraph
  const[targetText, settargetText] = useState(getRandomParagraph());


  //states for the clock to work
  const[timeLeft, setTimeLeft] = useState(30);

  const[isTestActive, setIsTestActive] = useState(false);

  //this state to know when to show the Stats screen!
  const [isGameOver, setIsGameOver] = useState(false);


  useEffect(()=>{
    let timer;
    if(isTestActive && timeLeft > 0){
      timer = setInterval(()=> setTimeLeft((prev) => prev-1), 1000);
    }else if(timeLeft === 0){
      setIsTestActive(false);
      setIsGameOver(true);
    }return () =>{
      clearInterval(timer);
    };
  }, [isTestActive, timeLeft]);


// function to update the memory lives here too, we update this using a
// callback function
   const handleTyping = (e) => {
    if(!isTestActive && timeLeft === 30 && e.target.value.length > 0){
      setIsTestActive(true);
    }
    if(timeLeft > 0){
      setUserInput(e.target.value);
    }
  };

  const restartHandler = () =>{
    settargetText(getRandomParagraph());
    setUserInput("");
    setTimeLeft(30);
    setIsTestActive(false);
    setIsGameOver(false);
  }

  const calculateStats = () =>{
    const targetWords = targetText.split(" ");

    const userWords = userInput.trim().split(" ");

    let correctWords = 0;

    userWords.forEach((word, index) => {
      if(word === targetWords[index]){
        correctWords++;
      }
    });
    
    const wpm = correctWords * 2;

    //Added a quick check so if they just press spacebar without typing, it doesn't break
    const accuracy = userWords.length > 0 && userWords[0] !== "" ?
    Math.round((correctWords /  userWords.length) * 100) : 0;

    return{ wpm, accuracy};
    };

    //to use tab button to restart the test
    useEffect(()=>{
      const handleKeyDown = (e) => {
    if(e.key === 'Tab'){
      e.preventDefault();
      restartHandler();
    }
  };

  //add this listener to the whole window
  window.addEventListener('keydown', handleKeyDown);

  //to remove the listener when the component unmounts
  return () =>{
    window.removeEventListener('keydown', handleKeyDown);
  };
    });

    const stats = calculateStats();
  return (
    <div className='app-container'>
      <Navbar/>
      <div className="timer">
        <h2> Time Left : {timeLeft}</h2>
      </div>
      {isGameOver ? (
        <Stats wpm={stats.wpm} accuracy={stats.accuracy}/>
      ) : (
        <>
        <Data targetText={targetText} userInput = {userInput}/>
        <Text userInput = {userInput} handleTyping={handleTyping}/>
        </>
      )}
        <button className='restart' onClick={restartHandler}>
          Restart
          </button>        
    </div>
  )
}

export default Home
