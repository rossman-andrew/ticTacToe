const prompt = require('prompt');
prompt.start();

const displayBoard = (board) => {
  console.log('', board[0][0], '|', board[0][1], '|', board[0][2]);
  console.log('-----------');
  console.log('', board[1][0], '|', board[1][1], '|', board[1][2]);
  console.log('-----------');
  console.log('', board[2][0], '|', board[2][1], '|', board[2][2]);
};

const play = (board, move) => {
  displayBoard(board);
  let row = null;
  let col = null;
  console.log('Select a cell on the board, 1 through 9: ');
  prompt.get(['cell'], (err, result) => {
    if (!err) {
      if (result.cell === '1') {
        row = 0;
        col = 0;
      } else if(result.cell === '2') {
        row = 0;
        col = 1;
      } else if(result.cell === '3') {
        row = 0;
        col = 2;
      } else if(result.cell === '4') {
        row = 1;
        col = 0;
      } else if(result.cell === '5') {
        row = 1;
        col = 1;
      } else if(result.cell === '6') {
        row = 1;
        col = 2;
      } else if(result.cell === '7') {
        row = 2;
        col = 0;
      } else if(result.cell === '8') {
        row = 2;
        col = 1;
      } else if(result.cell === '9') {
        row = 2;
        col = 2;
      } else {
        console.log('Invalid selection.')
        play(board, move);
      }
      if (board[row][col] === ' ') {
        board[row][col] = move;
        const newMove = move === 'x' ? 'o' : 'x';
        play(board, newMove);
      } else {
        console.log('Invalid selection.')
        play(board, move); 
      }
    } else {
      console.log('Error getting your input');
    }
  });
};

(() => {
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  let move = 'x';
  play(board, move);
})();