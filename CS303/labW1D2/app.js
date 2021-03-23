/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
//nameString([]), "object has no properties"
//nameString(), "no object passed"
//nameString(null), "null argument"
//nameString({a:5}), "a"
//nameString({a:5, z:6, m:8}), "a.m.z"

function nameString(obj) {
    if (obj === undefined) {
        return "no object passed";
    } else if (obj === null) {
        return "null argument";
    } else {
        if (Object.keys(obj).length === 0) {
            return "object has no properties";
        } else {
            let keys = [];
            let result;
            for (let key in obj) {
                keys.push(key);    //[a,z,m]
                result = keys.sort().join(".");   //[a,m,z]
                //"a.m.z" 
            }
            return result;
        }
    }
}

console.log(nameString([]));
console.log(nameString());
console.log(nameString(null));
console.log(nameString({ a: 5 }));
console.log(nameString({ a: 5, z: 6, m: 8 }));
