/* eslint  prefer-destructuring: 0, default-case: 0 */
// https://www.codewars.com/kata/5765870e190b1472ec0022a2
function pathFinder(maze) {
  const pos = [0, 0];
  const mazeFlat = maze.replace(/[\r\n]/g, '');
  const n = Math.sqrt(mazeFlat.length);
  let counter = 0;

  let forward = 'right!';

  while(pos.join('') !== [n - 1, n - 1].join('')) {
    switch(forward) {
      case'right!':
        // Check if "left" of forward is empty:
        if(mazeFlat.charAt(pos[0] + 1 * (pos[1] - 1) * n) !== 'W' && pos[1] !== 0) {
          // If it is, make that new forward and move there.
          forward = 'up!';
          pos[1] -= 1;
          // If not, keep going straight.
        } else if(mazeFlat.charAt((pos[0] + 1) * 1 + pos[1] * n) !== 'W' && pos[0] !== n - 1) {
          // If forward is empty, move forward.
          pos[0] += 1;
          // If not, check if "right" is empty.
        } else if(mazeFlat.charAt(pos[0] * 1 + (pos[1] + 1) * n) !== 'W' && pos[1] !== n - 1) {
          // If it is, make this new forward and move there.
          forward = 'down!';
          pos[1] += 1;
          // Otherwise do a 180 and set forward to the oposite of what it currently is and move there.
        } else if(mazeFlat.charAt((pos[0] - 1) * 1 + pos[1] * n) !== 'W' && pos[0] !== 0) {
          forward = 'left!';
          pos[0] -= 1;
        }// Yes I know this last one is not needed but it skips the next case from checking for a wall were we already have so i think faster?
        break;

      case'left!':
        // I feel you should understand the drill by now. Rinse and repeat.
        if(mazeFlat.charAt(pos[0] * 1 + (pos[1] + 1) * n) !== 'W' && pos[1] !== n - 1) {
          forward = 'down!';
          pos[1] += 1;
        } else if(mazeFlat.charAt((pos[0] - 1) * 1 + pos[1] * n) !== 'W' && pos[0] !== 0) {
          pos[0] -= 1;
        } else if(mazeFlat.charAt(pos[0] + 1 * (pos[1] - 1) * n) !== 'W' && pos[1] !== 0) {
          forward = 'up!';
          pos[1] -= 1;
        } else if(mazeFlat.charAt((pos[0] + 1) * 1 + pos[1] * n) !== 'W' && pos[0] !== n - 1) {
          forward = 'right!';
          pos[0] += 1;
        }
        break;

      case'up!':
        if(mazeFlat.charAt((pos[0] - 1) * 1 + pos[1] * n) !== 'W' && pos[0] !== 0) {
          forward = 'left!';
          pos[0] -= 1;
        } else if(mazeFlat.charAt(pos[0] + 1 * (pos[1] - 1) * n) !== 'W' && pos[1] !== 0) {
          pos[1] -= 1;
        } else if(mazeFlat.charAt((pos[0] + 1) * 1 + pos[1] * n) !== 'W' && pos[0] !== n - 1) {
          forward = 'right!';
          pos[0] += 1;
        } else if(mazeFlat.charAt(pos[0] * 1 + (pos[1] + 1) * n) !== 'W' && pos[1] !== n - 1) {
          forward = 'down!';
          pos[1] += 1;
        }
        break;

      case'down!':
        if(mazeFlat.charAt((pos[0] + 1) * 1 + pos[1] * n) !== 'W' && pos[0] !== n - 1) {
          forward = 'right!';
          pos[0] += 1;
        } else if(mazeFlat.charAt(pos[0] * 1 + (pos[1] + 1) * n) !== 'W' && pos[1] !== n - 1) {
          pos[1] += 1;
        } else if(mazeFlat.charAt((pos[0] - 1) * 1 + pos[1] * n) !== 'W' && pos[0] !== 0) {
          forward = 'left!';
          pos[0] -= 1;
        } else if(mazeFlat.charAt(pos[0] + 1 * (pos[1] - 1) * n) !== 'W' && pos[1] !== 0) {
          forward = 'up!';
          pos[1] -= 1;
        }
        break;
    }

    counter += 1;
    if(counter > mazeFlat.length * 2) return false;
  }
  return true;
}
