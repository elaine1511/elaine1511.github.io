/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	if (string === undefined) {
		return "missing argument";
	} else if (typeof string !== "string") {
		return "argument not string";
	} else {
		let strArr = string.split("");
		if (strArr.length === 0) {
			return "";
		} else {
			let oddChar = [];
			for (let i = 0; i < strArr.length; i++) {
				if (i % 2 != 0) {
					oddChar.push(strArr[i]);
				}
			}
			return oddChar.join("");
		}
	}
}


// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	let posNum = array.filter(num => num > 0);
	let negNum = array.filter(num => num < 0);
	if (array.length === 0 || negNum.length === array.length) {
		return 0;
	} else {
		let result = posNum.reduce((a, b) => a + b);
		return result;
	}
}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}

function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item === "number";
	}
	function stringFilter(item) {
		return typeof item === "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}


// Makes all negative numbers of the input array positive
function makePositive(array) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			result.push(array[i] * -1);
		} else {
			result.push(array[i]);
		}
	}
	return result;
}


// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
	let arr = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== 0) {
			arr.push(array[i]);
		}
		else {
			if (arr[arr.length - 1] !== "*") {
				arr.push("*");
			}
		}
	}
	return arr;
}

console.log(removeZeros([5, 0, 0, 0, 6, 0, 0, 5, 0]).join("."));



