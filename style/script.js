const sentence = 'I have attached my resume for your review. I would be honored to further discuss how I can contribute to your projects and bring fresh energy to your team. Thank you for considering my application. I look forward to the possibility of collaborating with you Review review review.';

const matches = sentence.match(/review/gi);
const result = matches ? matches.length : 0;
let position = sentence.search(/review/i);
const positions = sentence.search(/reviews/i);
position = position >= 0 ? position : 'not found';
console.log(position);
// console.log(positions);
// console.log(result)
console.log(matches);

// Linear search
function linearSearch(arr, val) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return 'Not Found!!!';
}
console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], 'h'));

// Find the largest element in an array

function largestElement(arr) {
    let max = [0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(largestElement([11, 22, 3, 45, 35, 50, 52]));

// Reverse an array without any built in method
function reverseArr(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[reversed.length] = arr[i];
    }
    return reversed;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArr(array));

// Check if an array is a Palindrome without using any built in method
// Palindrome(same forward and backward)

function isPalindrome(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
// another way
function checkPalindrome(str) {
    const checking = str.split('').reverse().join('');
    return checking === str;
}
console.log(checkPalindrome('121'));

console.log("0" && " " && 7 && 9); //9 
console.log(typeof "0" && " " && 7 && 9);
console.log(typeof undefined);
console.log(typeof Number);
console.log(typeof null);
console.log(typeof []);

function greet({ name, age }) {
    const test = `Name: ${name}, age:${age}`;
    return test;
}

const user = { name: 'Roy', age: 38 };
console.log(greet(user));

// Spread operator
const arr = [1, 4, 6, 8, 9];
console.log(...arr);

// Copying an Array
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];
console.log(copiedArray);

// Merging arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];
console.log(c);

// Passing multiple arguments to a function
const numbers = [11, 22, 33, 44, 55];
// sum(...numbers);
function sum(a, b, c, d, e) {
    console.log(a + b + c + d + e);
}
sum(...numbers);
// sum()

// find method
const array2 = [1, 2, 3, 4, 5];
const final = array2.find((num) => num % 2 === 0);
console.log(final);
// this output gives the single element not an array that satisfies a condition


// filter method
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const results = array3.filter((num) => num % 2 === 0);
console.log(results);
// this output gives an array of elements that satisfies a condition

// slice method 
const testing = ['q', 'f', 'g', 'w', 't', 's'];
const rest = testing.slice(2, 4);
console.log(rest);
// slice() method get a subset of an array

// push() method
let tree = [12, 34, 67, 35];
tree.push(20, 30);
console.log(tree);
// this will modify the original array itself

// concat() method
let arr2 = [11, 22, 33];
let arr3 = arr2.concat(44, 55);
console.log(arr3); // this will create a new array
console.log(arr2); // this will not modify the original array

// pop() method
let popped = [12, 23, 34, 45, 56, 78];
popped.pop();
console.log(popped);
// it removes the last element of an array

// shift() method
let shifted = [12, 23, 34, 45, 56, 78];
shifted.shift();
console.log(shifted);
// this removes the first element of an array


// split() method
const sentences = 'I am a full stack web developer or full stack Engineer';
const output = sentences.split(' ');
// console.log(output)
const rest1 = output.map(function (e) {
    return e.split('').reverse().join('');
});
console.log(rest1.join(' '));



// splice() method
let colors = ['red', 'blue', 'green', 'white', 'black'];
let newArr = colors.splice(1, 3);
console.log(newArr); // it returns the removed items as a new array
console.log(colors); // it modifies the original array directly

let color = ['white', 'pink'];
color.splice(1, 0, 'green', 'rose');
console.log(color); // it inserts without deleting

let fruits = ['banana', 'apple', 'pineapple', 'mango'];
fruits.splice(1, 1, 'orange');
console.log(fruits); // it replaces apple with orange


// forEach() method
const tiger = [2, 4, 6, 8, 10, 12, 14];
tiger.forEach(num => {
    console.log(num + 5);
}); // it runs a function on each item and does not return anything or an array

// map() method
const digits = [2, 4, 6, 8, 10, 12, 14];
const digit = digits.map(num => {
    return (num + 5);
});
console.log(digit); // it creates a new array
console.log(digits); // but the original array remains unchanged

const sorting = [23, 11, 18, 45, 31, 22];
const sorted = sorting.sort();
console.log(sorting);
console.log(sorted);
sorting.sort((a, b) => b - a);
console.log(sorting);

// array like Objects
sum(1, 2, 4);
function sum() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
}

const str = 'horticultural';
console.log(str);
console.log(str.length);
console.log(str[3]);

// Convert an array like object into an array
const arrayLike = { 0: 'apple', 1: 'banana', 2: 'mango', length: 3 };
const likeArray = Array.from(arrayLike);
console.log(likeArray);


function showArgs() {
    const argsArray = [...arguments]; // Spread operator to convert
    console.log(argsArray);
}

showArgs("HTML", "CSS", "Tailwind");


// how to get if a number is integer or not
let d = 12.5;

if (d % 1 === 0) {
    console.log('This is an integer number');
} else {
    console.log('This is not an integer number');
}

console.log(Number.isInteger(12.5));

// how to duplicate 
function duplicate(arr) {
    return arr.concat(arr);
}
console.log(duplicate([1, 2, 3]));

// Write a function that reverse a number
function reverseNum(num) {
    const a = num.toString().split('').reverse().join('');
    return Number(a);
}
console.log(reverseNum(21));

// Write a javascript function that returns a passed string with letters in alphabetical order

function makeAlphabeticOrder(str) {
    return str.split('').sort().join('');
}
console.log(makeAlphabeticOrder('orange'));


// Write a javascript where every characters first letter will be uppercase
function capitalize(str) {
    const cap = str.split(' ').map(function (e) {
        return e.charAt(0).toUpperCase() + e.substring(1);
    });
    return cap;
}

console.log(capitalize('I am very happy'));

// Write a function to find the maximum of two numbers
function getMax(a, b) {
    if (a > b) return a;
    else if (b > a) return b;
    else return 'Numbers are equal';
}
console.log(getMax(12, 12));


// Factorial number
function getFact(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(getFact(4));

// Write a function that accepts a string and returns its reverse
function abcd(val) {
    return val.split('').reverse().join('');
}
console.log(abcd('Elizabeth'));


// create a function to find the largest number in an array
function findMax(arr) {
    let max = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[max]) {
            max = i;
        }
    }
    return arr[max];
}
console.log(findMax([12, 23, 45, 44, 11]));

// Write a javascript function get the number of occurrences of each letter in specified string. (ekta string er moddhe kon char koybar ashse sheta find kora)

function occurrence(str) {
    let occurrences = {};
    str.split('').forEach(function (e) {
        if (occurrences.hasOwnProperty(e) === false) {
            occurrences[e] = 1;
        } else {
            occurrences[e]++;
        }
    });
    return occurrences;
}
console.log(occurrence('committee'));


// Loop an array an add all members of it
function add(arr) {
    let sum = 0;
    arr.forEach(function (e) {
        sum = sum + e;
    });
    return sum;
}
console.log(add([1, 2, 3, 4, 5]));

// Finding Palindrome
function getPal(str) {
    const reversed = str.split('').reverse().join('');
    if (reversed === str) {
        console.log('This is Palindrome');
    } else {
        console.log('This is not Palindrome');
    }
}
getPal('madam');

// In an array of numbers and strings only add those members which are not strings

function getNumber(arr) {
    let sum = 0;
    arr.forEach(function (e) {
        if (typeof e === 'number') {
            sum = sum + e;
        }
    });
    return sum;
}
console.log(getNumber([123, 'rt', 21]));


// Loop an array of objects and remove all object's which do not have gender's value male

// write a javascript function to clone an array
// function cloneArr(arr) {
//     return [...arr];
// }
// console.log(cloneArr([1, 2, 6, 8, 9, 5]));

function cloneArr(arr) {
    let newArr = [];
    arr.forEach(function (e) {
        newArr.push(e);
    });
    return newArr;
}
console.log(cloneArr([1, 2, 3]));


function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
}

const roy = new Person('Ashiqur', 'Rahman', 30);
roy.country = 'Bangladesh';
console.log(roy);
console.log(roy.fullName());

const number3 = [1, 2, 3, 4];

const numIterator = number3[Symbol.iterator]();
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());

// for (let n of number3) {
//     console.log(n);
// }
// console.dir(number3)


// Write a javascript function which accepts an argument and returns the type
// Note: There are six possible values that type of returns: object, boolean, function, number, string and undefined

function typeTeller(str) {
    return typeof str;
}
console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller('12'));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function () { }));

// Self Invoke

(function () {
    console.log('This is the best solution');
    console.log(1 / 0);
    console.log(NaN ** 0)
    console.log(4 > 5)
    console.log(typeof Symbol("id"))
    console.log(typeof alert)
    console.log(typeof Math)
})();
