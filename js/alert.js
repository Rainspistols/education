"use strict";

function getMaxSubSum(arr) {
  let curSum = 0;
  let maxSum = 0;
  for (let num of arr) {
    curSum += num;
    maxSum = Math.max(curSum, maxSum);
    if (curSum < 0) curSum = 0;
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
