/*
JavaScript supports functional programming because it's functions
are first class citizens. Meaning they can do the same thing
that variables do*/

// Arrow notation
const log = message => console.log(message)
//Adding function to objects
const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message)
    }
};
obj.log(obj.message);

//Adding functions to arrays
const messages = [
        "They can be inserted into arrays",
        message => console.log(message)
];
messages[1](messages[0]);

// Functions can be sent to other functions as arguments
const outsideFunction = inside => inside("I am inside");
outsideFunction(message => console.log(message));

// They can be returned
var createScream = logger => message => logger(message);