/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/
/*Identifying the Pattern:

The staircase has n levels.
The first level has 1 asterisk, the second level has 2 asterisks, the third level has 3 asterisks, and so on, up to the nth level.
For each level, there are (n - level) leading spaces, where level represents the current level being constructed.
Constructing Each Level:

To construct each level, we need to print (n - level) spaces followed by level asterisks.
Handling Negative Input:

If the input n is negative, we should log an empty string, as stated in the problem description.
Combining All Levels:

To construct the entire staircase, we need to loop from level 1 to level n and print each level following the pattern mentioned above.
 */

const drawStairs = (n) => {
  let num = 1;
  while (num <= n) {
    let asterisk = new Array(num).fill("#");
    let spaceNum = n - num;
    let array = new Array(spaceNum).fill(" ");
    let result = array.concat(asterisk);
    result = result.join("");
    console.log(result);
    num++;
  }

  // if (n === 0) {

  // }

  // drawStairs(n - 1)

  //if the n is less than 0
  //return an a string saying empty string
};

drawStairs(6);

/* 
    
    Extension:
    Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
    number n where n must be an odd positive number. Note that each row of the star must
    be 'n' characters long. Be sure to include any leading/trailing spaces per row.
    
    Examples:
    drawStar(1) ->
    +
    
    drawStar(3) ->
    \|/
    -+-
    /|\
    
    drawStar(5) ->
    \ | /
     \|/ 
    --+--
     /|\ 
    / | \
    
    */

const drawStar = (n) => {};

module.exports = { drawStairs, drawStar };
