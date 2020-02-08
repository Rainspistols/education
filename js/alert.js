"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let result = new Map();
  for (let str of arr) {
    let newProp = str
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    result.set(newProp, str);
  }
  return Array.from(result.values());
}

console.log(aclean(arr));
