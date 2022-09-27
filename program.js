/*1. Write a program that loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);


2. Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. 
The characters should form a chessboard.
*/
/*
var board = "";


for (var y = 1; y < 5; y++) {
  
  for (var x = 1; x < 5; x++) {
   
    if (y % 2 === 0) {
      board = " " + board;
      board += "#";
    }
    /
    else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
