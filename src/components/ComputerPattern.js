export default function ComputerPattern(checkArray, CheckWinner, j) {
  let arr = [];
  let newPattern = [];
  let arr2 = [];
  let newPattern2 = [];

  const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  if (CheckWinner(checkArray)) {
    return;
  }

  for (let i = 0; i < winPattern.length; i++) {
    const [a, b, c] = winPattern[i];
    if (
      checkArray[a] === null &&
      checkArray[b] !== null &&
      checkArray[c] !== null &&
      checkArray[b] === checkArray[c]
    ) {
      arr = [a, b, c];
      newPattern.push(arr);
    } else if (
      checkArray[a] !== null &&
      checkArray[b] === null &&
      checkArray[c] !== null
    ) {
      if (checkArray[a] === checkArray[c]) {
        arr = [a, b, c];
        newPattern.push(arr);
      }
    } else if (
      checkArray[a] !== null &&
      checkArray[b] !== null &&
      checkArray[c] === null
    ) {
      if (checkArray[a] === checkArray[b]) {
        arr = [a, b, c];
        newPattern.push(arr);
      }
    }
  }

  if (newPattern.length < 2) {
    if (newPattern[0] !== undefined) {
      newPattern[0].forEach((e) => {
        if (checkArray[e] === null) {
            checkArray[e] = "O";
        }
      });
      return true;
    }
  } else if (newPattern.length === 2) {
    newPattern.forEach((element) => {
      const [a, b, c] = element;
      arr2 = [a, b, c];
      newPattern2.push(arr2);
    });
  }

  if (newPattern2.length !== 2) {
    return;
  } else if (newPattern2.length !== undefined) {
    if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[1][2]] === null &&
      newPattern2[1][2] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
      return true;
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[1][2]] === "X" &&
      newPattern2[1][1] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
      return true;
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[1][2]] === "X" &&
      newPattern2[1][0] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
      return true;
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][2]] === null
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][2]] === "X"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][2]] === "X"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][2]] === "X"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][2]] === "X"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][2]] === null
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[1][2]] === null
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[1][2]] === "O"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[1][2]] === "O"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][2]] === null
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][2]] === "O"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][2]] === "O"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][2]] === "O"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][2]] === "O"
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][2]] === null
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    }

    if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[1][2]] === null &&
      newPattern2[0][2] !== j
    ) {
      newPattern2[1].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[1][2]] === "O" &&
      newPattern2[0][1] !== j
    ) {
      newPattern2[1].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[1][2]] === "O" &&
      newPattern2[0][0] !== j
    ) {
      newPattern2[1].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][2]] === "O" &&
      newPattern2[0][2] !== j
    ) {
      newPattern2[1].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][2]] === "O" &&
      newPattern2[0][2] !== j
    ) {
      newPattern2[1].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][2]] === null &&
      newPattern2[0][0] !== j
    ) {
      newPattern2[1].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[0][1]] === "X" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][2]] === "O" &&
      newPattern2[0][0] !== j
    ) {
      newPattern2[1].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[1][0]] === "O" &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][2]] === null &&
      newPattern2[0][1] !== j
    ) {
      newPattern2[1].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "X" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[1][1]] === "O" &&
      checkArray[newPattern2[0][2]] === "X" &&
      checkArray[newPattern2[1][2]] === "O" &&
      newPattern2[0][1] !== j
    ) {
      newPattern2[1].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[1][2]] === null &&
      newPattern2[1][2] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[1][2]] === "X" &&
      newPattern2[1][1] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[1][2]] === "X" &&
      newPattern2[1][0] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][2]] === null &&
      newPattern2[1][2] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][2]] === "X" &&
      newPattern2[1][0] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][2]] === "X" &&
      newPattern2[1][0] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][2]] === "X" &&
      newPattern2[1][1] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === "O" &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][2]] === "X" &&
      newPattern2[1][1] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[1][0]] === "X" &&
      checkArray[newPattern2[0][1]] === "O" &&
      checkArray[newPattern2[1][1]] === "X" &&
      checkArray[newPattern2[0][2]] === "O" &&
      checkArray[newPattern2[1][2]] === null &&
      newPattern2[1][2] !== j
    ) {
      newPattern2[0].forEach((e) => {
        if (checkArray[e] === null) {
          checkArray[e] = "O";
        }
      });
    } else if (
      checkArray[newPattern2[0][0]] !== null &&
      checkArray[newPattern2[1][0]] !== null &&
      checkArray[newPattern2[0][1]] !== null &&
      checkArray[newPattern2[1][1]] === null &&
      checkArray[newPattern2[0][2]] !== null &&
      checkArray[newPattern2[1][2]] !== null &&
      newPattern2[1][1] === j
    ) {
      return true;
    } else if (
      checkArray[newPattern2[0][0]] === null &&
      checkArray[newPattern2[1][0]] !== null &&
      checkArray[newPattern2[0][1]] !== null &&
      checkArray[newPattern2[1][1]] !== null &&
      checkArray[newPattern2[0][2]] !== null &&
      checkArray[newPattern2[1][2]] !== null &&
      newPattern2[0][0] === j
    ) {
      return true;
    } else if (
      checkArray[newPattern2[0][0]] !== null &&
      checkArray[newPattern2[1][0]] === null &&
      checkArray[newPattern2[0][1]] !== null &&
      checkArray[newPattern2[1][1]] !== null &&
      checkArray[newPattern2[0][2]] !== null &&
      checkArray[newPattern2[1][2]] !== null &&
      newPattern2[1][0] === j
    ) {
      return true;
    } else if (
      checkArray[newPattern2[0][0]] !== null &&
      checkArray[newPattern2[1][0]] !== null &&
      checkArray[newPattern2[0][1]] === null &&
      checkArray[newPattern2[1][1]] !== null &&
      checkArray[newPattern2[0][2]] !== null &&
      checkArray[newPattern2[1][2]] !== null &&
      newPattern2[0][1] === j
    ) {
      return true;
    } else if (
      checkArray[newPattern2[0][0]] !== null &&
      checkArray[newPattern2[1][0]] !== null &&
      checkArray[newPattern2[0][1]] !== null &&
      checkArray[newPattern2[1][1]] !== null &&
      checkArray[newPattern2[0][2]] === null &&
      checkArray[newPattern2[1][2]] !== null &&
      newPattern2[0][2] === j
    ) {
      return true;
    } else if (
      checkArray[newPattern2[0][0]] !== null &&
      checkArray[newPattern2[1][0]] !== null &&
      checkArray[newPattern2[0][1]] !== null &&
      checkArray[newPattern2[1][1]] !== null &&
      checkArray[newPattern2[0][2]] !== null &&
      checkArray[newPattern2[1][2]] === null &&
      newPattern2[1][2] === j
    ) {
      return true;
    } else {
      return true;
    }
    return true;
  }
  return false;
}
