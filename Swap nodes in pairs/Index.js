/*

First case
_____________
*INPUT
const head = [1,2,3,4]

*OUTPUT
[2,1,3,4]

Second case
_____________
*INPUT
const head = []

*OUTPUT
[]

Third case
_____________
*INPUT
const head = [1]

*OUTPUT
[1]
*/

const array1 = [1, 2, 3, 4];
const array2 = [];
const array3 = [1];

let swapPairs = (head) => {
  // first case
  if (head.length % 2 == 0) {
    let normalOrder = [array1[0], array1[1], array1[2], array1[3]];
    let swapped = [array1[1], array1[0], array1[3], array1[2]];
    return swapped;
  }

  // second case
  else if (head.length == 0) {
    return head;
  }

  // Third case
  else head.length == 1;
  {
    return head;
  }
};
console.log(swapPairs(array2));
