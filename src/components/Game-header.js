import React from 'react'
import "../styles/GameHeader.css"
import { useState } from 'react'

function GameHeader() {
  const [theme, setTheme] = useState('day')
  const [colour, setColour] = useState('white')
  const [colour2, setColour2] = useState('black')
  const [title, setTitle] = useState('Light Theme')
  const [colour3, setColour3] = useState('#fff')
  const [colour4, setColour4] = useState('#414141')

  function changeTheme(){
    theme === 'day' ? setTheme((e)=> e = 'night') : setTheme((e)=> e = 'day')
    colour === 'white' ? setColour((e)=> e = 'black') : setColour((e)=> e = 'white')
    colour2 === 'black' ? setColour2((e)=> e = 'white') : setColour2((e)=> e = 'black')
    title === 'Light Theme' ? setTitle((e)=> e = 'Dark Theme') : setTitle((e)=> e = 'Light Theme')
    colour3 === '#fff' ? setColour3((e)=> e = '#414141') : setColour3((e)=> e = '#fff')
    colour4 === '#414141' ? setColour4((e)=> e = '#fff') : setColour4((e)=> e = '#414141')

    document.body.style.background = colour2
    document.body.style.color = colour
    document.querySelector('.Board').style.boxShadow = `inset 0 0 10px 3px ${colour3}, 0 0 10px 3px ${colour3}`
    document.querySelector('.container').style.boxShadow = `inset 0 10px 10px ${colour3}, 0 0 10px 15px ${colour3}`
    document.querySelector('.Board').style.boxShadow = `inset 0 0 20px 5px ${colour3}, 0 0 20px 5px ${colour3}`
    document.querySelector('.GameHeader').style.color = `${colour3}`
    document.querySelector('.GameHeader').style.textShadow = `3px 3px 5px ${colour4}, -3px -3px 5px ${colour4}`
    document.querySelector('.theme').style.border = `2px solid ${colour}`
  }
  return (
    <section className='GameHeader'>
      <h3>TIC-TAC-TOE</h3>
      <button className='theme' type='button' style={{backgroundColor: colour}} title={title} onClick={changeTheme}>   
        <section id="iconContainer" className={`${theme}`} style={{backgroundColor: colour2}}><img src={`${theme}.png`} alt={`${theme}`}/></section>
      </button>
    </section>
  )
}

export default GameHeader