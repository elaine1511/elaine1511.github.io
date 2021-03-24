/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	

describe("Analyser", function () {
		it("analysis properties", function () {
			let person = new Person("bob", "usa", [100, 90]);
			person.f = analyzer;	// name too short
			person.x = 0;			// name too short
			let analysis = person.f();
			assert.equal(analysis.numProperties, 6);
			assert.equal(analysis.cntShortName, 2);
			assert.equal(analysis.cntReference, 1);	// the grades array is a reference.
		});
	});	
*/

function analyzer() {
	let obj = {
		numProperties: function () {
			let num = 0;
			for (let key in this) {
				num += 1;
			}
			return num;
		},
		cntShortName() {
			let count = 0;
			for (let key in this) {
				if (key.length < 3) {
					count++;
				}
			}
			return count;
		},
		cntReferences() {
			let counter = 0;
			for (let key in this) {
				if (typeof key === "object") {
					counter++
				}
			}
			return counter;
		}
	}
}

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
	this.name = name;
	this.country = country;
	this.grades = grades;
	this.computeGrade = function () {
		let sum = 0;
		for (let grade of this.grades) {
			sum += grade;
		}
		let avg = sum / this.grades.length;
		return avg;
	}
}

// let test = new Person("bob", "usa", [100, 90]);
// console.log(test.country);
