/**
 *  returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
function palindrome(string) {
  //remove all symbols and punctuation
  string = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
  //basecase for when the length of the string is 0, return true
  //basecase for when the length of the string is 1, return true
  if (string.length === 0 || string.length === 1) return true;

  //basecase if the first and last chars in string are not equal, return false
  if (string[0] !== string[string.length - 1]) return false;
  //return call to palindrome, passing in the sliced string, slicing the first and last character
  return palindrome(string.slice(1, -1));
}
/*
// function palindrome(str){
//   //remove spaces, special chars and uppercase car
//   str = str.replace(/[^a-zA-Z]/g,"").toLowerCase();
//   //base case
//   //if the length of string is one then return true
//   if(str.length === 1)return true;
//   //if the length of str is equal to two then return the bool comparing the two elements
//   if(str.length === 2)return str[0] === str[1];
//   //if the first index and the last index strongly equal then return the invocation of palindrome with the substring from the second index to the second to last index
//   if(str[0] === str.slice(-1)]){return palindrome(str.slice(1, -1))}
//   else{return false}
// } 
*/

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //; -> true
// console.log(palindrome("llama mall")); // -> true
// console.log(palindrome("jmoney")); // -> false

/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */
//add default labeled divisor assigned the value of 2
function isPrime(num, div = 2) {
  //basecase catch 1 if the num is less than or equal to 1 return false
  if (num <= 1) return false;
  //basecase if the div strictly equals num -1, return true
  if (div === num - 1) return true;
  //basecase catch 2, 2 is prime, return true
  if (num === 2) return true;
  //recursive case check to see if the remainder of num divided by the divisor is equal to 0
  if (num % div === 0) return false;
  //if not, recurse and pass num, and increment divisor
  return isPrime(num, div++);
}

/*
isPrime:
const isPrime = (n) => {
  if(n < 2) return false;
  for (let i = 2; i < n ; i++) {
    if(n % i === 0) return false;
  }
  return true;
}
*/
// console.log(isPrime(1))//; -> false
// console.log(isPrime(2))//; -> true
// console.log(isPrime(3))//; -> true
// console.log(isPrime(4))//; -> false

/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the
 * performance difference.
 */

function nthFibonacci(num, cache = {}) {
  // catch cases
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (cache[num]) return cache[num];
  // store in cache

  //return function passing num -1 and num -2
  cache[num] = nthFibonacci(num - 1, cache) + nthFibonacci(num - 2, cache);
  return cache[num];
}
//  console.log(nthFibonacci(0))//; -> 0
//  console.log(nthFibonacci(1))//; -> 1
//  console.log(nthFibonacci(2))//; -> 1
//  console.log(nthFibonacci(3))//; -> 2
//  console.log(nthFibonacci(4))//; -> 3
//  console.log(nthFibonacci(5))//;

/** returns a function with a context bound to this
 *
 * const mattObj = {
 *  name: 'matt',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * let boundShout = functionBind(mattObj.shout, mattObj);
 * boundShout(); -> prints 'matt;
 *
 * const kimObj = {
 *  name: 'kim',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * boundShout = functionBind(mattObj.shout, kimObj);
 * boundShout(); -> prints 'kim'
 *
 * boundShout = functionBind(mattObj.shout, {name: 'bob'});
 * boundShout(); -> prints 'bob' // string
 */

// i: some method (mattObj.shout) , an object
// o: method

/**
 * 
 * context.shout = function() {
    console.log(this.name);   
  } 
 */

function functionBind(func, context) {}

//   const mattObj = {
//     name: 'matt',
//     shout: function() {
//       console.log(this.name);
//     }
//   };

// // console.log()

// let boundShout = functionBind(mattObj.shout, mattObj);
// boundShout();// -> prints 'matt;

// const kimObj = {
// name: 'kim',
// shout: function() {
//     console.log(this.name);
//   }
// };
// boundShout = functionBind(mattObj.shout, kimObj);
// boundShout();// -> prints 'kim'

// boundShout = functionBind(mattObj.shout, {name: 'bob'});
// boundShout();// -> prints 'bob' // string
// cccc
/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 *
 * [['rock','rock'],
 * ['rock','paper'],
 * ['rock','scissors'],
 *
 * ['paper','paper'],
 * ['paper','scissors'],
 * ['paper','rock'],
 *
 * ['scissors','scissors'],
 * ['scissors','paper'],
 * ['scissors','rock']]
 *
 * rockPaperScissors(3); ->
 * [['rock','rock', 'rock],['rock', 'rock','paper'],['rock','rock', 'scissors'],
 */
//i = num
//o:array of arrays
function rockPaperScissors(num) {
  // How many different options for nth rounds

  // Get every permutations with duplicates

  const rps = ["rock", "paper", "scissors"];

  let combs = [];
  combination(0, [], combs);
  return combs;

  // function combination(start, curCombs, combs) {
  //   if (curCombs.length === num) {
  //     combs.push([...curCombs]);
  //     return;
  //   }

  //   for (let i = start; i < rps.length; i++) {
  //     let curRps = rps[i];
  //     curCombs.push(curRps);
  //     combination(i, curCombs, combs);
  //     curCombs.pop();
  //   }
  // }

  function combination(start, curCombs, combs) {
    if (curCombs.length === num) {
      combs.push([...curCombs]);
      return;
    }

    for (let i = start; i < rps.length; i++) {
      let curRps = rps[i];
      curCombs.push(curRps);
      combination(0, curCombs, combs);
      curCombs.pop();
    }
  }
}

console.log(rockPaperScissors(2));

// [[array1], [array2], [element3.1],[element3.2]  ]
// [array1]
// array1

// sequence = [[element3.1],[element3.2]]
// ...sequence = [element3.1] [element3.2]
// [[element3.1], [element3.2], 'rock']

// const myMap = new Map();
// console.log(myMap)
// // Adding key-value pairs
// myMap.set('name', 'John');
// console.log(myMap)
// myMap.set(1, 'One');
// console.log(myMap)
// myMap.set(true, 'Boolean');
// console.log(myMap)

// // Getting values using keys
// console.log(myMap.get('name')); // Output: 'John'
// console.log(myMap.get(1)); // Output: 'One'
// console.log(myMap.get(true));

// function insertionSort(array) {
// // create a new value and store array
// const myArray = array;
// //apply sort to that array and return
// return myArray.sort((a, b) => (a-b))
// }
// console.log(insertionSort([7, 5, 3, 10]))

function insertionSort(array) {
  // Base case: If array has one or zero elements, it is already sorted.
  // if (array.length <= 1) {
  //   return array;
  // }
  //                                                                     //[7, 5, 3]
  // // Recursive case
  // // Take the last element as the currentElement                2nd call
  // const currentElement = array[array.length - 1];   //[7, 5, 3, 10]
  // console.log(currentElement)
  // // Sort the remaining elements (excluding the last one) recursively
  // const sortedArray = insertionSort(array.slice(0, array.length - 1)); //[7, 5, 3, 10]
  // console.log(sortedArray)
  // // Find the correct position to insert the currentElement in the sorted array
  // let i = sortedArray.length - 1;
  // console.log(i)
  // while (i >= 0 && sortedArray[i] > currentElement) { // i = 2, [7, 5, 3] >
  //   console.log(sortedArray[i])
  //   sortedArray[i + 1] = sortedArray[i];
  //   i--;
  // }
  // // Insert the currentElement at the correct position
  // sortedArray[i + 1] = currentElement;
  // return sortedArray;
}

// console.log(insertionSort([7, 5, 3, 10, 12, 1]));

function bubbleSort(array) {}

function mergeSort(array) {}
