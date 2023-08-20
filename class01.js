"use strict";
// console.log("🚀~ file Awais");
//let a = "bablu";
// console.log("🚀 ~ file: class01.ts:3 ~ a:", a)
// console.log('🚀', "baul");
var studentRoll = [1, 2, 3, 4, 2];
console.log(studentRoll[5]);
function bablu(item) {
    studentRoll[studentRoll.length] = item;
}
;
bablu(9);
console.log(studentRoll);
//studentRoll.push(0);
//console.log(studentRoll)
//studentRoll.pop();
//console.log(studentRoll)
//studentRoll.shift()
//console.log(studentRoll)
//studentRoll.unshift(1);
//console.log(studentRoll)
studentRoll.splice(1, 3, 4, 2, 0, 1);
console.log(studentRoll);
