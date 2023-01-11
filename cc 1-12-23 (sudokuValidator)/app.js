/*
Implement a function called "sudokuValidator(board)" that takes a 2D array of integers as a parameter representing a sudoku board (9x9) and returns a boolean indicating whether the board is a valid sudoku solution.

A valid sudoku board satisfies these two properties:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-grids that compose the grid must contain the digits 1-9 without repetition.
*/


/*
board = [  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
sudokuValidator(board) => true

board = [  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]
sudokuValidator(board) => false


*/


//solution
function sudokuValidator(board) {
    // check that the board is a 9x9 array. If not immediately return false.
    if(board.length !== 9 || board[0].length !== 9) {
        return false;
    }



    // check rows
    for (let i = 0; i < 9; i++) {
        let set = new Set();
        for (let j = 0; j < 9; j++) {
            if (set.has(board[i][j])) {
                return false;
            } else {
                set.add(board[i][j]);
            }
        }
    }
    // check columns
    for (let i = 0; i < 9; i++) {
        let set = new Set();
        for (let j = 0; j < 9; j++) {
            if (set.has(board[j][i])) {
                return false;
            } else {
                set.add(board[j][i]);
            }
        }
    }
    // check subgrids
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let set = new Set();
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    if (set.has(board[x][y])) {
                        return false;
                    } else {
                        set.add(board[x][y]);
                    }
                }
            }
        }
    }
    return true;
}

//time complexity of O(9^2) which is O(81). this is because for each element of the matrix we visit it once.