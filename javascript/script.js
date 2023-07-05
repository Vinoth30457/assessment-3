"use strict";

const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const btn = document.getElementById("btn");
const answer5 = document.getElementById("answer-5");
const answer6 = document.getElementById("answer-6");
const answer7 = document.getElementById("answer-7");
const answer8 = document.getElementById("answer-8");
const answer9 = document.getElementById("answer-9");
const answer10 = document.getElementById("answer-10");

// DOM => Logical problem questions:

// 1.	You are given two numbers. Write a program that finds the sum, difference, product, and quotient of the two numbers and displays the results on a web page.

// Given input:2,4.
// Expected output:Sum: 6, Difference: -2, Product: 8, Quotient: 0.5

const arithmetic = (num1, num2) => {
  let a = num1;
  let b = num2;

  let sum = a + b;
  let difference = a - b;
  let product = a * b;
  let quotient = a / b;

  answer1.innerText = `answer : sum = ${sum}, difference = ${difference}, Product = ${product}, quotient = ${quotient}`;
};
arithmetic(2, 4);

// 2.	You are given a string. Write a program that checks if the string is a palindrome (i.e., the string reads the same backward as forward) and displays the result on a web page.

// Given input:ABCDCBA.
// Expected output:The string is a palindrome.

const palindrome = (str) => {
  let string = str;
  let revStr = string.split("").reverse().join("");
  if (string === revStr) {
    answer2.innerText = `Answer : The string is a palindrome`;
  } else {
    answer2.innerText = `Answer : The string is not a palindrome`;
  }
};
palindrome("ABCDCBA");

// 3.	You are given an array of numbers. Write a program that finds the average of the numbers and displays the result on a web page.

// Given input:2,3,4,5
// Expected output:The average is 3.5.

const average = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let result = total / arr.length;

  answer3.innerText = `Answer : Average = ${result}`;
};
average([2, 3, 4, 5]);

// 4.	You are given a list of items. Write a program that randomly selects an item from the list and displays it on a web page.

// Given input:Apple, Banana, Orange, Grape, Mango
// Expected output:When you click submit button,it randomly selects an item from the list.

const randomly = (arr) => {
  let randomNum = Math.floor(Math.random() * arr.length);
  answer4.innerText = `Answer : ${arr[randomNum]}`;
};

btn.addEventListener("click", () => {
  randomly(["Apple", "Banana", "Orange", "Grape", "Mango"]);
});

// 5.	You are given a string. Write a program that counts the number of vowels in the string and displays the result on a web page.

// Given input:Skill safari
// Expected Output:Number of vowels: 4

const vowelsCount = (str) => {
  let count = 0;
  let string = str.split("");
  console.log(string);
  //aeiou
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      count += 1;
    } else if (string[i] === "e" || string[i] === "E") {
      count += 1;
    } else if (string[i] === "i" || string[i] === "I") {
      count += 1;
    } else if (string[i] === "o" || string[i] === "O") {
      count += 1;
    } else if (string[i] === "u" || string[i] === "U") {
      count += 1;
    }
  }
  answer5.innerText = `Answer : ${count}`;
};
vowelsCount("skill safari");

// 6.	You are given an array of numbers. Write a program that finds the median of the numbers and displays the result on a web page.

// Given input:2,5,7,1,45,8,7
// Expected Output:Median: 7

function findMedian(array) {
  array.sort((a, b) => a - b);
  console.log(array.sort((a, b) => a - b));
  const length = array.length;
  if (length % 2 === 1) {
    answer6.innerText = `Answer : ${array[Math.floor(length / 2)]}`;
  } else {
    const middle1 = array[Math.floor(length / 2)];
    const middle2 = array[Math.floor(length / 2) - 1];
    answer6.innerText = `Answer : ${array[middle1 + middle2 / 2]}`;
  }
}
findMedian([2, 5, 7, 1, 45, 8, 7]);

// 7.	You are given two strings. Write a program that checks if the two strings are anagrams (i.e., the two strings have the same characters but in a different order) and displays the result on a web page.

// Given input:Skill safari
// Expected output:The strings are not anagrams.

const anagrams = (str1, str2) => {
  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");
  if (string1 === string2) {
    answer7.innerText = `Answer : The strings are anagrams`;
  } else {
    answer7.innerText = `Answer : The strings are not anagrams`;
  }
};
anagrams("skill", "safari");

// 8.	You are given an array of numbers. Write a program that finds the largest and smallest odd numbers in the array and displays the results on a web page.

// Given input:2,4,5,7,2,3
// Expected output:Largest odd number: 7, Smallest odd number: 3

const findLSodd = (arr) => {
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  odd = odd.sort((a, b) => a - b);

  answer8.innerText = `Answer : Smallest odd number = ${
    odd[0]
  } , Largest odd number : ${odd[odd.length - 1]}`;
};
findLSodd([2, 4, 5, 7, 2, 3]);

// 9.	You are given a list of items. Write a program that removes all duplicates from the list and displays the result on a web page.

// Given input:apple, banana, cherry, apple, date, banana, elderberry
// Expexted Output:apple,banana,cherry,,date,elderberry

const removeDup = (arr) => {
  let dupRemoved = [...new Set(arr)];
  answer9.innerText = `Answer : ${dupRemoved}`;
};
removeDup([
  "apple",
  "banana",
  "cherry",
  "apple",
  "date",
  "banana",
  "elderberry",
]);

// 10.	You are given a number. Write a program that checks if the number is a prime number (i.e., only divisible by 1 and itself) and displays the result on a web page.

// Given input:61
// Expected output:61 is a prime number.

const findPrime = (num) => {
  let count = 0;
  if (num === 1) {
    answer10.innerText = `Answer : ${num} is not a prime number`;
  } else if (num > 1) {
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        count += 1;
      }
    }
    if (count < 2) {
      answer10.innerText = `Answer : ${num} is a prime number`;
    } else {
      answer10.innerText = `Answer : ${num} is not a prime number`;
    }
  }
  console.log(count);
};
findPrime(61);
