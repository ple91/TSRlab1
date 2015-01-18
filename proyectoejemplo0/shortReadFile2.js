<<<<<<< HEAD
// Name: shortReadFile2.js 
// Purpose: This programme prints this file on screen using promises, and 
shows later the file length. 
Promise = require("bluebird"); 
fs = require("fs"); 
// To this end, promisify() builds an asynchronous variant of fs.readFile() 
that returns a promise 
readFileAsync = Promise.promisify(fs.readFile); 
// Obtain the promise. 
var myFile = readFileAsync("shortReadFile2.js", "utf8"); 
// Auxiliary function to print the file, returning it. 
function printFile (contents) {console.log(contents); return contents;} 
// Auxiliary function to show the file length. 
function showLength(contents) {console.log(contents.length); return 
contents;} 
// Function that prints information about errors. 
function showErrors (err) {console.log( "Errors reading file..."); 
console.log(err);} 
// Use the promise, chaining multiple then()s, if needed. 
myFile.then(printFile).then(showLength, showErrors); 
=======


Promise = require("bluebird");

fs = require("fs");


readFileAsync = Promise.promisify(fs.readFile);

var myFile = readFileAsync("shortReadFile2.js", "utf8");


function printFile (contents) {console.log(contents); return contents;}

function showLength(contents) {console.log(contents.length); return
contents;}

// Function that prints
information about errors.
17:
function showErrors (err) {console.log( "Errors reading file...");
console.log(err);}
18:
19:
// Use the promise, chaining multiple then()s, if needed.
20:
myFile.then(printFile).then(showLength, showErrors);
>>>>>>> 3997de3358200a4fbc56f6db3404b5e3b01ad7d7
