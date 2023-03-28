
function CheckWinner(checkArray) {
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

  for (let i = 0; i < winPattern.length; i++) {
    const [a, b, c] = winPattern[i];

    if (
      checkArray[a] === checkArray[b] &&
      checkArray[a] === checkArray[c] &&
      checkArray[b] === checkArray[c] &&
      checkArray[a] !== null &&
      checkArray[b] !== null &&
      checkArray[c] !== null
    )
      return checkArray[a];

  }

  return null;
}

export default CheckWinner;