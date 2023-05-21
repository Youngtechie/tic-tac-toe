import React from "react";
import CheckWinner from "./CheckWinner";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  if (squares.every((v) => v !== null) && !CheckWinner(squares)) {
    document.querySelector("#notify").innerText = "It is a Draw!";
  }

  function Reset(){
    setSquares(Array(9).fill(null))
    setIsXNext(false)
    document.querySelector("#notify").innerText = "Player X to play";
    return;
  }

  function handleClick(i) {
    const nextSquare = squares.slice();
    document.querySelector('#btns button').addEventListener('click', Reset)

    if (CheckWinner(nextSquare)) {
      return;
    }

    if (nextSquare[i] === null) {
      if (!isXNext) {
        nextSquare[i] = "X";
        document.querySelector("#notify").innerText = "Player O to play";
      } else if (isXNext) {
        nextSquare[i] = "O";
        document.querySelector("#notify").innerText = "Player X to play";
      }
    }

    setSquares(nextSquare);
    setIsXNext(!isXNext);
    CheckWinner(nextSquare);

    if (CheckWinner(nextSquare) === "X") {
      document.querySelector("#notify").innerText = "Player X is the Winner!";
    } else if (CheckWinner(nextSquare) === "O") {
      document.querySelector("#notify").innerText = "Player O is the Winner!";
    } else {
      return;
    }
  }

  return (
    <section className="Board">
      <section className="group-rows">
        <section className="squares" id="0" onClick={() => handleClick(0)}>
          {squares[0]}
        </section>
        <section className="squares" id="1" onClick={() => handleClick(1)}>
          {squares[1]}
        </section>
        <section className="squares" id="2" onClick={() => handleClick(2)}>
          {squares[2]}
        </section>
      </section>

      <section className="group-rows">
        <section className="squares" id="3" onClick={() => handleClick(3)}>
          {squares[3]}
        </section>
        <section className="squares" id="4" onClick={() => handleClick(4)}>
          {squares[4]}
        </section>
        <section className="squares" id="5" onClick={() => handleClick(5)}>
          {squares[5]}
        </section>
      </section>

      <section className="group-rows">
        <section className="squares" id="6" onClick={() => handleClick(6)}>
          {squares[6]}
        </section>

        <section className="squares" id="7" onClick={() => handleClick(7)}>
          {squares[7]}
        </section>

        <section className="squares" id="8" onClick={() => handleClick(8)}>
          {squares[8]}
        </section>
      </section>
    </section>
  );
}
