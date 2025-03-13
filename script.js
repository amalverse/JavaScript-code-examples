//33.Javascript Program to sort words in Alphabetical Order.
/*
split(): To split the string into array.
sort() : To sort the array into alphabetical ascending order.
join(): to join arrays
*/

let string = prompt("please enter a string");
let stringArray = string.split(" ");
stringArray.sort();
console.log(string);
console.log(stringArray);
console.log(stringArray.join(" "));
