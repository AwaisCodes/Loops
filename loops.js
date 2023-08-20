"use strict";
var index = 14;
while (index < 20) {
    console.log("bablu");
    index++;
}
for (var i = 0; i < 5; i++) {
    console.log("bablu rocks");
}
var j = 0;
do {
    console.log("bablu nakar yar");
    j++;
} while (j < 4);
var sum = 0;
var list = [];
for (let t = 1; t < 100; t++) {
    if (t % 2 == 0) {
        sum = sum + t;
        list.push(t);
        console.log(sum);
    }
    else if (t == 99)
        console.log(sum);
}
console.log(list);
