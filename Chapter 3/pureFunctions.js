/**
 * A pure function is one that returns a value that is
 * computed based on its arguments. They do not cause
 * side effects
 */
const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};
const selfEducate = person => 
    ({
        ...person,
        canRead: true,
        canWrite: true
    });
console.log(selfEducate(frederick));
console.log(frederick);

// Impure function
function Header(text) {
    let h1 = document.createElement('h1');
    h1.innerText = text;
    document.body.appendChild(h1)
}; //Does not return a function or value and cause side effects

//In React
const Header = (props) => <h1>{props.title}</h1>