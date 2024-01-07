/**
 * Destructuring Assignment
 * Allows to locally scope fields within an object 
 * and to declare which values will be used
 */

let sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    chesse: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
}
let {bread, meat} = sandwich //pulls the properties and creates local variables
console.log({bread, meat})
bread = "milk";
meat = "beans";

console.log(sandwich.bread)

var [x,,z] = [1, 2, 3];
console.log(x, z)

/**
 * Object Literal Enhancement
 */
var name = "bread";
var elevation = 9738;

let funHike = {name, elevation};
console.log(funHike);

/**
 * Spread Operator (...)
 */
let town = {
    name: "Yaounde",
    distance: 30
}
let country = "Cameroon";
let townCountry = {...town, country}
console.log(townCountry)