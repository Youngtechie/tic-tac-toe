/* eslint-disable no-loop-func */
import React from "react";
import CheckWinner from "./CheckWinner";
import { useState, useEffect } from "react";
import ComputerPattern from "./ComputerPattern";
import GameHeader from "./Game-header";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  let random = 4;
  let timeId;
  const [click, setClick] = useState(true);
  let nextSquare = squares.slice();
  const [Oset, setOset] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout(timeId);
    };
  }, [Oset, timeId]);
  //   function handleClick(i) {
  //     const nextSquare = squares.slice();
  //     const randomNumber = generateRandomNumber(0, 9);
  //     if (CheckWinner(nextSquare)) {
  //       return;
  //     }

  //     if (nextSquare[i] === null) {
  //       if (!isXNext) {
  //         nextSquare[i] = "X";
  //       } else if (isXNext) {
  //         nextSquare[i] = "O";
  //       }
  //       console.log(randomNumber);
  //     }

  //     setSquares(nextSquare);
  //     setIsXNext(!isXNext);
  //     CheckWinner(nextSquare);

  //     if (CheckWinner(nextSquare) === "X") {
  //       console.log("X is the Winner!");
  //     } else if (CheckWinner(nextSquare) === "O") {
  //       console.log("O is the Winner!");
  //     } else {
  //       return;
  //     }
  //   }

  function getRandom(min, max) {
    const floatRandom = Math.random();

    const difference = max - min;

    // random between 0 and the difference
    const random = Math.floor(difference * floatRandom) + min;

    return random;
  }

  function noRepetition() {
    let randomIndex = getRandom(0, randomNumbers.length - 1);
    let cut = randomNumbers[randomIndex];
    randomNumbers.splice(randomIndex, 1);
    random = cut;
  }

  function handleClick(i) {
    
    if (CheckWinner(nextSquare) || nextSquare[i]) {
      return;
    }
    if (nextSquare[i] === null) {
      nextSquare[i] = "X";
    }
    if (!ComputerPattern(nextSquare, CheckWinner, i)) {
      setClick(c => c = false)
      timeId = setTimeout(() => {
        if (nextSquare[random] === null) {
          nextSquare[random] = "O";
          setOset(!Oset);
          setClick(c => c = true)
        } else if (nextSquare[random] !== null) {
          for (let i = 0; i < randomNumbers.length; i++) {
            noRepetition();
            if (nextSquare[random] === null && !CheckWinner(nextSquare)) {
              nextSquare[random] = "O";
              setOset(!Oset);
              setClick(c => c = true)
              break;
            }
          }
        }
      }, 2000);
    }

    setSquares(nextSquare);
    CheckWinner(nextSquare);

    if (CheckWinner(nextSquare) === "X") {
      console.log("X is the Winner!");
    } else if (CheckWinner(nextSquare) === "O") {
      console.log("O is the Winner!");
    } else {
      return;
    }
  }

  return (
    <section className="Board">
      <section className="group-rows">
        {click ? (
          <section className="squares" id="0" onClick={() => handleClick(0)}>
            {squares[0]}
          </section>
        ) : (
          <section className="squares" id="0">
            {squares[0]}
          </section>
        )}

        {click ? (
          <section className="squares" id="1" onClick={() => handleClick(1)}>
            {squares[1]}
          </section>
        ) : (
          <section className="squares" id="1">
            {squares[1]}
          </section>
        )}


        {click ? (
          <section className="squares" id="2" onClick={() => handleClick(2)}>
            {squares[2]}
          </section>
        ) : (
          <section className="squares" id="2">
            {squares[2]}
          </section>
        )}
      </section>

      <section className="group-rows">
      {click ? (
          <section className="squares" id="3" onClick={() => handleClick(3)}>
            {squares[3]}
          </section>
        ) : (
          <section className="squares" id="3">
            {squares[3]}
          </section>
        )}


        {click ? (
          <section className="squares" id="4" onClick={() => handleClick(4)}>
            {squares[4]}
          </section>
        ) : (
          <section className="squares" id="4">
            {squares[4]}
          </section>
        )}


        {click ? (
          <section className="squares" id="5" onClick={() => handleClick(5)}>
            {squares[5]}
          </section>
        ) : (
          <section className="squares" id="5">
            {squares[5]}
          </section>
        )}
      </section>

      <section className="group-rows">
      {click ? (
          <section className="squares" id="6" onClick={() => handleClick(6)}>
            {squares[6]}
          </section>
        ) : (
          <section className="squares" id="6">
            {squares[6]}
          </section>
        )}


        {click ? (
          <section className="squares" id="7" onClick={() => handleClick(7)}>
            {squares[7]}
          </section>
        ) : (
          <section className="squares" id="7">
            {squares[7]}
          </section>
        )}


        {click ? (
          <section className="squares" id="8" onClick={() => handleClick(8)}>
            {squares[8]}
          </section>
        ) : (
          <section className="squares" id="8">
            {squares[8]}
          </section>
        )}
      </section>
    </section>
  );
}
