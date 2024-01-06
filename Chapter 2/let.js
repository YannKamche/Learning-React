/**
 * JavaScript has lexical variable scoping.
 * With the let keyword, we can scope a variable to any code block
 * Using let protects the value of the global variable
 */
var myCourse = "FreeCodeCamp";

if (myCourse) {
    var myCourse = "Udemy";
    console.log(myCourse)// Udemy
}
console.log(myCourse) //Udemy. The global value is resetted

var myProgrammingLanguage = "JavaScript";

if (myProgrammingLanguage) {
    let myProgrammingLanguage = "Java";
    console.log(myProgrammingLanguage) //Java
}
console.log(myProgrammingLanguage) //JavaScript