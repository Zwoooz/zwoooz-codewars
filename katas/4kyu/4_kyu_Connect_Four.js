function whoIsWinner(moves) {
  const board = Array(7).fill().map(() => Array(6).fill(0));
  const column = moves.join('\n').match(/^[A-Z]/gm).map((x) => (x.charCodeAt(0) - 65));
  const color = moves.join('\n').match(/Red|Yellow$/gm);
  let matched;
  for(let n = 0; n < column.length; n += 1) {
    // console.log(`element ${index}: ${element}`);
    let k = 0;
    while(board[column[n]][k]) {
      // console.log('board[element][i]', board[column[n]]);
      // console.log('element', element);
      k += 1;
    }
    board[column[n]][k] = color[n];
    console.table(board);
    // const counter = 0;
    // Column matching
    for(let j = 0; j < 7; j += 1) {
      if(matched) break;
      matched = board[j].join('').match(/(Yellow){4}|(Red){4}/);
      // console.log('test1 line 20');

      // Row matching
      for(let k = 0; k < 6; k += 1) {
        const arr = [];
        for(let l = 0; l < 7; l += 1) {
          arr[l] = board[l][k];
        }
        matched = arr.join('').match(/(Yellow){4}|(Red){4}/);
        // console.log('test2 line 29');
        if(matched) break;
      }
      if(matched) break;

      // Diagonal matching
      const diagonalL = [];
      const diagonalR = [];
      for(let m = 0; m < 7; m += 1) {
        if(j + m < 7) {
          // console.log('input L: ', [j + m, 5 - m]);
          diagonalL[m] = (board[j + m][5 - m]);
          // console.log('output L: ', diagonalL);
        } else diagonalL[m] = 0;
        matched = diagonalL.join('').match(/(Yellow){4}|(Red){4}/);
        // console.log('test3 line 44');
        if(j + m < 7) {
          // console.log('m: ', m);
          // console.log('input R: ', [j + m, m - 1]);
          diagonalR[m] = (board[j + m][m - 1]);
          // console.log('output R: ', diagonalR);
        } else diagonalR[m] = 0;
        matched = diagonalR.join('').match(/(Yellow){4}|(Red){4}/);
        // console.log('test4 line 52');
        if(matched) break;
      }
    }
    if(matched) break;
  }
  console.log(board);
  if(!matched) return'Draw';
  /* column.forEach((element, index) => {
    // console.log(`element ${index}: ${element}`);
    let i = 0;
    while(board[element][i]) {
      console.log('board[element][i]', board[element]);
      console.log('element', element);
      i += 1;
    }
    board[element][i] = color[index];
    console.table(board);
    const counter = 0;
    // Column matching
    for(let j = 0; j < 7; j += 1) {
      matched = board[j].join('').match(/(Yellow){4}|(Red){4}/);

      // Row matching
      for(let k = 0; k < 6; k += 1) {
        const arr = [];
        for(let l = 0; l < 7; l += 1) {
          arr[l] = board[l][k];
        }
        matched = arr.join('').match(/(Yellow){4}|(Red){4}/);
        if(matched) break;
      }
      if(matched) break;

      // Diagonal matching
      const diagonalL = [];
      const diagonalR = [];
      for(let m = 0; m < 7; m += 1) {
        if(j + m < 7) {
          // console.log('input L: ', [j + m, 5 - m]);
          diagonalL[m] = (board[j + m][5 - m]);
          // console.log('output L: ', diagonalL);
        } else diagonalL[m] = 0;
        matched = diagonalL.join('').match(/(Yellow){4}|(Red){4}/);

        if(j + m < 7) {
          // console.log('m: ', m);
          // console.log('input R: ', [j + m, m - 1]);
          diagonalR[m] = (board[j + m][m - 1]);
          // console.log('output R: ', diagonalR);
        } else diagonalR[m] = 0;
        matched = diagonalR.join('').match(/(Yellow){4}|(Red){4}/);
        if(matched) break;
      }
      if(matched) break;
    }
  }); */
  return matched[0].match(/Yellow|Red/)[0];
}

console.table(whoIsWinner(['C_Yellow',
  'E_Red',
  'G_Yellow',
  'B_Red',
  'D_Yellow',
  'B_Red',
  'B_Yellow',
  'G_Red',
  'C_Yellow',
  'C_Red',
  'D_Yellow',
  'F_Red',
  'E_Yellow',
  'A_Red',
  'A_Yellow',
  'G_Red',
  'A_Yellow',
  'F_Red',
  'F_Yellow',
  'D_Red',
  'B_Yellow',
  'E_Red',
  'D_Yellow',
  'A_Red',
  'G_Yellow',
  'D_Red',
  'D_Yellow',
  'C_Red']));

// DEN MÅSTE VETA VEM SOM VINNTER FÖRST
/* console.table([['Yellow', 0, 0, 0, 0, 0],
  ['Red', 'Yellow', 0, 0, 0, 0],
  ['Red', 'Red', 'Yellow', 0, 0, 0],
  ['Red', 'Red', 'Red', 'Yellow', 0, 0],
  ['Red', 0, 0, 0, 0, 0],
  ['Yellow', 0, 0, 0, 0, 0],
  ['Yellow', 'Yellow', 'Yellow', 0, 0, 0]]); */

// TODO: Does not work.
