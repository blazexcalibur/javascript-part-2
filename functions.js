//Read about the Array.prototype.sort method. Create a function that can be used with sort. 
//This function should take two strings, and return a value that sort can use to determine which is the longest string. 
//Finally, create an array of strings and try to get it sorted using your new function.

function compare(str1, str2) {
    if (str1.length === str2.length) {
        return 0;
    }
    if (str1.length > str2.length) {
        return 1;

    }
    else {
        return -1;
    }
}

var fruit = ['cherriesdddd', 'apples', 'bandanas'];

//console.log(fruit.sort(compare));

//Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property. 
//Then, run some code that will sort your array by the longest name. 
//Then, run some code that will sort your array by e-mail address in alphabetical order.


var cauli = {
    name: 'cauliflower',
    email: 'ig@gmail.com'
}

var carrot = {
    name: 'carrot',
    email: 'cdsd@gmail.com'
}

var tomatoe = {
    name: 'tomatoe',
    email: 'metrooo@gmail.com'
}


var veggies = [cauli, carrot, tomatoe];

//console.log(veggies);

function compare(str1, str2) {
    if (str1.name.length === str2.name.length) {
        return 0;
    }
    if (str1.name.length > str2.name.length) {
        return 1;
    }
    else {
        return -1;
    }
}

//console.log(veggies.sort(compare));

function compareEmail(str1, str2) {
    return str1.email.localeCompare(str2.email);
}

//console.log(veggies.sort(compareEmail));

//Create a function that can be used with Array.prototype.map.
//This function should take a number and return its square. 
//Then, use this function with map on an array of numbers to check the result.

var numbers = [1, 4, 9];

function squared(num) {
    return num * num;
}

var squared = numbers.map(squared);

//console.log(squared);

//Create a function that can be used with Array.prototype.map. 
//This function should be able to take an object and square its “num” property. 
//Then, use this function with map on an array of objects each containming a “num” property.

function squarednum(obje) {
    return obje.num * obje.num;
}

var numberss = [{
    num: 1
}, {
    num: 4
}, {
    num: 9
}];

var sqr = numberss.map(squarednum);

//console.log(sqr);

//In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) and returned the result of the operation on the two numbers. 
//Here we are going to do the same but at a higher order. Create a function called operationMaker that takes only a string called operation as argument. 
//This string could be “add”, “subtract”, “mult” or “div”. Your function will return a function that will take two numbers and return the result of running operation on these numbers. 
//The end result should let me do something like this:

function operationMaker(op) {
    if (op === "add")
        return function (num1, num2) {
            return num1 + num2;
        }
         if (op === "subtract")
        return function (num1, num2) {
            return num1 - num2;
        }
         if (op === "mult")
        return function (num1, num2) {
            return num1 * num2;
        }
         if (op === "div")
        return function (num1, num2) {
            return num1 / num2;
        }
}

/*
var adder = operationMaker("add");
var subber = operationMaker("subtract");
var multi = operationMaker("mult");
var divider = operationMaker("div");

var sum = adder(1,2);
var diff = subber(5,1);
var product = multi(5,1);
var quotient = divider(18,3);

console.log(sum);
console.log(diff);
console.log(product);
console.log(quotient);
*/
