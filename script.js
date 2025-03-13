
# //1.To print something in index page using Javascript
document.writeln("<p>Hello World</p>");
document.writeln("<h1>Welcome</h1>");
document.writeln("<h4>Amal Kishor</h4>"); //we can also use just [document.write("Hello World");]

# //2.to print in console
console.log("Hello World!");

# //3.Alert Hello world!
alert("Hello World! This is an alert.");

# //4.Program to add static numbers
let a = 5;
let b = 6;
let c = a + b;

console.log("The sum of " + a + " and " + b + " is : " + c);

# //5.Program to add dynamic numbers

let a = prompt("Enter the  first number: ");
let b = prompt("Enter the  second number: ");

let c = parseInt(a) + parseInt(b); //paeseInt convert string to Integer(number) because prompt takes user input as string.

console.log("The sum of " + a + " and " + b + " is: " + c);

# //6.To find Square root of a Number: Use Math.sqrt(number);
let number = 16;
let squareRoot = Math.sqrt(number);
console.log(squareRoot);

//or -> for dynamic numbers
let number = prompt("Enter a number: ");
let squareRoot = Math.sqrt(number);
console.log(squareRoot);

# //7.find Area of triangle
//Right angle triangle : Area= (base*height)/2;

let base = parseFloat(prompt("Enter the base value: "));
let height = parseFloat(prompt("Enter the height value: "));

let area = (base * height) / 2;

console.log(
  "Base of triangle is " +
    base +
    ", height of triangle is " +
    height +
    "; Area of triangle is: " +
    area
);

//Area of Regular triangle = Math.sqrt(s*(s-a)*(s-b)*(s-c)) , s=(a+b+c)/2;
let a = parseFloat(prompt("Enter the side a: "));
let b = parseFloat(prompt("Enter the side b: "));
let c = parseFloat(prompt("Enter the side c: ")); //parseFloat convert string to a float

let s = (a + b + c) / 2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Area of triangle is: " + area);

//Area of equilateral triangle = (Math.sqrt(3)/4)*Math.pow(side,2);
let side = prompt("Enter side value: ");
let area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
console.log("Area of equilateral triangle is: " + area);

# //8.Swapping of two numbers 

let a = parseInt(prompt("Enter a: "));
let b = parseInt(prompt("Enter b: "));
console.log(`The value of a is:${a}, The Value of b is:${b}`);
//input a=5,b=6
temp = a; //temp=5
a = b; //a=6;
b = temp; //b=5;
//Ater Swapping
console.log(`The value of a is:${a}, The Value of b is:${b}`);

//method 2 of swapping two numbers
let a = 5;  //let a = parseInt(prompt("Enter a: "));
let b = 6;  //let b = parseInt(prompt("Enter b: "));
console.log(`The value of a is:${a}, The Value of b is:${b}`);

a = a + b; //11
b = a - b; //11-6=5
a = a - b; //11-5=6

console.log(`The value of a is:${a}, The Value of b is:${b}`);

# //9. convert kms to miles using javascript function
//miles = kms*factor; 1km = 0.621371 miles

let convertButton = document.querySelector("#convert");

function convert() {
  let kms = document.getElementById("data").value;

  const factor = 0.621371;
  let miles = kms * factor;

  document.getElementById("result").innerText = `${miles} miles`;
}
convertButton.addEventListener("click", convert);

# //10.convert celsius to fahrenhiet using javascript function
//Fahrenheit= celsius*1.8+32;

let convertButton = document.querySelector("#convert");

function convert() {
  let celsius = document.getElementById("data").value;

  let fahrenheit = celsius * 1.8 + 32;

  document.getElementById("result").innerText = `${fahrenheit} Fahrenheit`;
}
convertButton.addEventListener("click", convert);

# // 11.Javascript program to check if a number is positive, negative or zero.

/* 
let checkButton = document.querySelector("#check");
function check() {
  let number = document.getElementById("data").value;
  let checkresult = Math.sign(number);   
  document.getElementById("result").innerText = checkresult;  //1,-1 or 0
}
checkButton.addEventListener("click", check);  
*/

let checkButton = document.querySelector("#check");
function check() {
  let number = document.getElementById("data").value;
  let checkresult = Math.sign(number);
  if (checkresult > 0) {
    document.getElementById("result").innerText = "Positive";
  } else if (checkresult < 0) {
    document.getElementById("result").innerText = "Negative";
  } else {
    document.getElementById("result").innerText = "Zero";
  }
}
checkButton.addEventListener("click", check);

# // 12.Javascript Program to generate a random number between 20 to 50.
/* To get random number betwwen a range: Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber); 
let random = Math.floor(Math.random() * (50 - 20 + 1) + 20);
console.log(random);
*/

// Javascript Program to generate a random number between 1 to 10.
let random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(random);


# // 13.Javascript program to check whether a number is odd or even.
/*using if-else statement
let num = prompt("Enter a number");
if (num % 2 == 0) {
  console.log(num + " is even");
} else {
  console.log(num + " is odd");
}
*/

/*checking using ternary operator
let num = prompt("Enter a number");
let result = num % 2 == 0 ? "even" : "odd";
console.log(num + " is " + result);
*/

//using switch statement
let num = prompt("Enter a number");
switch (num % 2) {
  case 0:
    console.log(num + " is even");
    break;
  default:
    console.log(num + " is odd");
}

# //14. Javascript Program to check if a Number is Prime Number or Not
//A prime number is a number that is only divisible by 1 and itself.

let number = prompt("Enter a number");
if (number == 1) {
  console.log(`${number}  is not a prime number nor composite number.`);
} else if (number < 1) {
  console.log(`${number}  is a not a prime number.`);
} else {
  for (let i = 2; i < number; i++) {
    //i++ = 2,3,4,5,...
    if (number % i == 0) {
      console.log(`${number}  is not a prime number.`);
      break;
    } else {
      console.log(`${number}  is a prime number.`);
      break;
    }
  }
}

# //15.Javascript program to find largest number among three numbers
/*Math.max() menthod 
let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");
let x = Math.max(a, b, c); 
console.log(`${a},${b},${c} : Largest = ${x}`);
*/
//User defined method
function check(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");

let x = check(a, b, c); // Calling check function
console.log(`${a}, ${b}, ${c} : Largest = ${x}`);

# //16.Javascript program to find factorial of a number.
/* n! = 1 * 2 * 3 * 4 * ... * n;

let num = parseInt(prompt("Enter a number: "));
let fact = 1;
if (num < 0) {
  console.log("Factorial of negative number does not exist.");
} else if (num == 0) {
  console.log("Factorial of 0 is 1");
} else {
  for (let i = 1; i <= num; i++) {
    console.log(i);
    fact = fact * i;
  }
  console.log("Factorial of " + num + " is: " + fact);
}
*/

//Using Recursion
//What is recursion? Recursion is a function that calls itself. It is used to solve complex problems by breaking them down into simpler parts.
let num = parseInt(prompt("Enter a number: "));
function fact(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
console.log(num + "! =" + fact(num));

# //17.Javascript program to print the table of any user given number.
function table(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number * i);
  }
}
// table(5);
let number = prompt("Enter a number: "); //input
table(number); //calling function

# //18. Javascript program to check Armstrong Number.
//What is Armstrong Number? An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let num = prompt("Enter a number");
let sum = 0;
let temp = num; //temp=371
while (temp > 0) {
  //371>0
  let rem = temp % 10; //rem=1 //rem=7 //rem=3
  sum = sum + rem * rem * rem; //sum=1+1*1*1 //sum=7+7*7*7 //sum=3+3*3*3
  temp = parseInt(temp / 10); //temp=37 //temp=3 // temp=0
}
if (sum == num) {
  console.log(num + " is an Armstrong number");
} else {
  console.log(num + " is not an Armstrong number");
}

# //19. Javascript program to check if the Numbers have same last digit.

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");

if (a % 10 == b % 10 && b % 10 == c % 10) {
  console.log(`${a},${b},${c} have same last digit`);
} else {
  console.log(`${a},${b},${c} have different last digit`);
}

# //20.Jvascript Program to Check Palindrome using Built-in Function
/*A string is apalindrome if it is read the same from forward or backward. For example, DAD reads the same either from forward or backward.
Split(''): Spits a string and returns an array.
reverse(): Reverse an array
Join(''): Join the array elements and return a string.
*/

let string = prompt("Enter a string");
let stringArray = string.split(""); //split string and returns array
let stringArrayReverse = stringArray.reverse(""); //reverse the array
let stringArrayJoin = stringArrayReverse.join(""); //Join array and returns string =revrse string
let reverseString = stringArrayJoin; //reversed string

if (string === reverseString) {
  console.log(`${string} is Palindrom`);
} else {
  console.log(`${string} is not Palindrom`);
}

# //21.Javascript Program to check Palindrom String using for loop
//A string is apalindrome if it is read the same from forward or backward. For example, DAD reads the same either from forward or backward.

let string = prompt("Enter a string");
let stringLenght = string.length;
for (let i = 0; i < stringLenght / 2; i++) {
  // console.log(string[i]);    //first half of string
  // console.log(string[stringLenght - 1 - i]);  //last half of string in reverse
  if (string[i] != string[stringLenght - 1 - i]) {
    console.log(`${string} is not Palindrom`);
  } else {
    console.log(`${string} is Palindrom`);
  }
}

# //22.Javascript Program to check the Number of Occurrences of a character in a string using for loop.
let string = prompt("Please enter a string");
let letter = prompt("Please enter a letter");
let stringLength = string.length;

/*
H 0  
A 1  
L 2  
L 3  
O 4  
*/
let counter = 0;
for (let i = 0; i < stringLength; i++) {
  if (string[i] == letter) {
    counter++;
  }
}
console.log(`${string} => ${letter} => ${counter}`);

# //23.Javascript Program to check whether a string stars and ends with certain characters.
//string.startsWith(): It will check the first character of the string, and return true or false.
//string.endsWith(): It will check the lasr character of the string, and return true or false.

let string = prompt("Please Enter a String");
console.log(string);
let testStart = string.startsWith("a");
let testEnd = string.endsWith("a");
if (testStart == true && testEnd == true) {
  console.log(`starts: ${testStart} , ends: ${testEnd}`); //true-true
} else if (testStart == true && testEnd == false) {
  console.log(`starts: ${testStart} , ends: ${testEnd}`); //true-false
} else if (testStart == false && testEnd == true) {
  console.log(`starts: ${testStart} , ends: ${testEnd}`); //false-true
} else {
  console.log(`starts: ${testStart} , ends: ${testEnd}`); //both false
}

# //24.Javascript Program to check whether a string contains a substring.
let string = "The name of Prime Minister of India is Narendra Modi";
let substring = "is";
console.log(string);
let test1 = string.includes(substring);
console.log(test1);
let test2 = string.indexOf(substring);
console.log(test2);

# //25.Javascript Program to convert the first letter of a string to uppercase.
//charAt(): To get a character at an index.
//toUpperCase():To upper  case character.
//slice(): To slide any chracter from string.
let string = prompt("Enter a string");
console.log(string);
let firstLetter = string.charAt(0);
console.log(firstLetter);
let remainingLetters = string.slice(1);
console.log(remainingLetters);
let result = firstLetter.toUpperCase() + remainingLetters;
console.log(result);
//Output: Enter a string: hello

# //26.Javascript Program to count the number of vowels in a string using Regex.
//Regex is known as regualar expression.
//It is used to match, test and find characters from a string.
//This function to find vowels in a string: Expression: [aeiou] , Modifires: gi

let string = prompt("Enter a string");
console.log(string);
const reg = /[aeiou]/gi;
let char = string.match(reg);
console.log(`Number of vowels in the string: ${char.length}`);
console.log(`Vowels in the string: ${char.join(",")}`);
 //or
let string = prompt("Enter a string");
let vowels = string.match(/[aeiou]/gi);
console.log(vowels.length);

# //27.Javascript Program to find Armstrong Numbers between an interval.
//What is Armstrong Number? An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let a = prompt("please enter first number");
let b = prompt("please enter last number");

for (let i = a; i <= b; i++) {
  let temp = i;
  let noOfDigits = i.toString().length;
  let sum = 0;
  while (temp > 0) {
    //for eg. 371>0
    let rem = temp % 10; //rem=1 //rem=7 //rem=3
    temp = parseInt(temp / 10); //temp=37 //temp=3 // temp=0
    sum = sum + rem ** noOfDigits; //sum=1+ 1 ** 3 //sum=7+ 7 ** 3 //sum=3+ 3 ** 3
  }
  if (sum == i) {
    console.log(i);
  }
}

# //28.Javascript Program to find sum of Natural Numbers Using Recursion.
/* Suppose we have a function named sum():
sum(5): returns 5 +sum(5-1)
sum(4): returns 5 + 4 +sum(4-1)
sum(3): returns 5 + 4 + 3 + sum(3-1)
sum(2): returns 5 + 4 + 3 + 2 + sum(2-1)
sum(1): returns 5 + 4 + 3 + 2 + 1 + sum(1-1)
sum(0): returns 15
*/

function sum(number) {
  if (number > 0) {                    //base condition -> function call itself until it beacomes zero.
    return number + sum(number - 1);
  } else {
    return number;
  }
}
let result = sum(15); //calling the function
console.log(result);

# //29.Javascript Program to find factors of a number.
/*
To be the factors of a number , the factor number should exactly divide the number with zero remainder. 
eg. factor of 12 is 1,2,3,4,6, and 12.
*/
let number = prompt("Please enter a number");
for (let i = 0; i <= number; i++) {
  if (number % i == 0) {
    console.log(i);
  }
}

# //30.Javascript Program to make a simple calculator using switch cases.
let num1 = parseFloat(prompt("please enter 1st number"));
let num2 = parseFloat(prompt("please enter 2nd number"));

let opr = prompt("please select among +,-,*,/");

switch (opr) {
  case "+":
    let result1 = num1 + num2;
    console.log(result1);
    break;
  case "-":
    let result2 = num1 - num2;
    console.log(result2);
    break;
  case "*":
    let result3 = num1 * num2;
    console.log(result3);
    break;
  case "/":
    let result4 = num1 / num2;
    console.log(result4);
    break;
  default:
    console.log(" invalid");
}

# //31.Javascript Program to Print Fibonacci sequence.
/* The Fibonacci sequence is the integer sequence whre the first two terms are 0 and 1. After that, the next ter is defined as the sum of the previous two terms.
 0,1,1,2,3,5,8,13,21,................................
*/
let a = 0;
let b = 1;
for (let i = 0; i <= 10; i++) {
  let temp = a + b;   //0+1 -> 1
  console.log(temp); 
  a = b;        //0 => 1
  b = temp;     //1 => 1
}

# //32.Javascript Program to Replace Chracters  of a String.
// replace(): The replace finds, replaces and returns a new string.
//Syntax: replace(find,replace);

let string = "Mr. Red has red car and a red bike";
console.log(string);

let newString = string.replace("red", "green");
console.log(newString);

//or
let string = "Mr. Red has Red car and a red bike";
console.log(string);

let reg = new RegExp("red", "gi");
let newString = string.replace(reg, "blue");
console.log(newString);

#  //33.Javascript Program to Reverse a String using for loops.
//input - Hello, output -olleH
let string = "Hello";
let stringLength = string.length;
let reverseString = " ";
for (let i = stringLength - 1; i >= 0; i--) {
  reverseString += string[i];
}
console.log(reverseString);

# //34.Javascript Program to sort words in Alphabetical Order.
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

