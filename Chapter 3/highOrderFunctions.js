/**
 * High-Order functions are functions that can manipulate 
 * other functions
 */

const invokeIf = (condition, fnTrue, fnFalse) =>
        condition ? fnTrue() : fnFalse();


console.log(invokeIf(true, () => "Welcome", () => "Unauthorized"));
//Currying is the practice of holding on to some of the values needed to
//complete an operation until the rest can be supplied

const userLogs = userName => message => 
    console.log(`${userName} -> ${message}`);

message = userLogs("Welcome");
message("Peter");

//recursion is a technique that involves creating functions that recall
// const countdown = (value , fn) => {
//     fn(value)
//     return (value > 0) ? countdown(value-1, fn) : value
// };
// countdown(10, value => console.log(value));

const countdown = (value, fn, delay = 1000) => {
    fn(value)
    return (value > 0) ?
        setTimeout(() => countdown(value - 1, fn), delay) : value
}
console.log(countdown(10, value => console.log(value)))
/**
 * The setTimeout function takes into parameter 2 arguments, 
 * the first one being a function and the next on e being a delay
 */

