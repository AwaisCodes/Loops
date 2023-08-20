"use strict";
var todo = [1, 2, 3, 4, 5, 6, 7];
if (todo.length % 2 != 0) {
    todo.splice(todo.length / 2, 1);
}
else
    todo.splice(todo.length / 2, 2);
console.log(todo);
