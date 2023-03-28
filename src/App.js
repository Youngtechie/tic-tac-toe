import React from 'react';
import Game from './components/Game';
import GameHeader from './components/Game-header';
import GameSidebar from './components/GameSidebar';
import './styles/App.css'

export default function TicTacToe() {
  return (
    <>
      <main className='container'>
        <GameHeader/>
        <Game/>
        <GameSidebar/>        
      </main>
    </>
  );
}
