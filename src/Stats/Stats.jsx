import React from 'react'
import './Stats.css'

const Stats = ({wpm, accuracy}) => {
  return (
    <div className='results-screen' style = {{textAlign : 'center', color: 'white', margin : '50px 0'}}>
        <h1 style={{fontSize: '3rem', color: 'rgb(214, 165, 100)'}}>Time's Up</h1>
        <h2>Speed : {wpm} WPM</h2>
        <h2>Accuracy : {accuracy}%</h2>

        {wpm > 60 && <h3 style={{color: 'green'}}>Amazing typing speed !</h3>}
        
      
    </div>
  )
}

export default Stats
