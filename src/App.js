import React from 'react';
import Game from './components/Game';
import GameHeader from './components/Game-header';
import './styles/App.css'

export default function TicTacToe() {
  const player = 'Player X to play'
  return (
    <>
      <main className='container'>
        <GameHeader/>
        <Game/>
      </main>
      <p id="notify">{player}</p>
      <section id='btns'>
        <button>RESET GAME</button>
      </section>
    </>
  );
}
