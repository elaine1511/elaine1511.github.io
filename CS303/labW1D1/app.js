/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function pow(x, n) {
	return x ** n;
}

function add2(n1, n2) {
	return n1 + n2;
}

function add(arguments) {
	let count = arguments.length;
	let sum = 0;
	for (let i = 0; i < count; i++) {
		sum += arguments[i];
	}
	return sum;
}

/*
	Input: grades is an array of integers
	Output: compute average of grades and report letter grade as follows:
	90 - 100 A
	80 - 89  B
	70 - 79  C
	60 - 69  D
	0 - 59   NC
*/
function computeGrade(grades) {
	for (let score in grades) {
		if (score >= 90) {
			return "A";
		} else if (score >= 80) {
			return "B";
		} else if (score >= 70) {
			return "C";
		} else if (score >= 60) {
			return "D";
		} else {
			return "NC";
		}
	}
}

