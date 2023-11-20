document.addEventListener('DOMContentLoaded', function () {
  const cells = document.querySelectorAll('.cell');
  let currentPlayer = 'X';
  let gameBoard = ['', '', '', '', '', '', '', '', ''];
  let gameActive = true;

  cells.forEach(cell => {
    cell.addEventListener('click', function () {
      const rowIndex = cell.parentElement.dataset.row;
      const colIndex = cell.dataset.col;

      if (gameBoard[rowIndex * 3 + colIndex] === '' && gameActive) {
        cell.textContent = currentPlayer;
        gameBoard[rowIndex * 3 + colIndex] = currentPlayer;

        if (checkWinner()) {
          alert(`Player ${currentPlayer} wins!`);
          gameActive = false;
        } else if (gameBoard.every(cell => cell !== '')) {
          alert('It\'s a draw!');
          gameActive = false;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    });
  });

  function checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
      const [a, b, c] = combination;
      return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
  }
});
