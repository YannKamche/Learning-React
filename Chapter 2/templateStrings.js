/**
 * Template Strings provide us with an alternative to string concatenation
 * It allows insertion of variables into a string
 */

console.log("I am learning" + " JavaScript");

let myActivity = "Learning";
let myProgrammingLanguage = "JavaScript";

console.log(`I am ${myActivity} ${myProgrammingLanguage}`);

//Template strings honor whitespace
document.body.innerHTML = `
    <section>
        <header>
            <h1>I am ${myActivity} ${myProgrammingLanguage}</h1>
        </header>
    </section
`
//The code above updates the HTML content of the body