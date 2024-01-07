/**
 * Arrow functions are new feature of ES6.
 */

let myCountry = {
    name : "Cameroon",
    capital: {
        political: "Yaounde",
        economic: "Douala"
    },
    otherTowns : ["Buea, Bamenda, Garoua"]
}
//function to print otherTowns in my city
let otherTowns = ({otherTowns}) => otherTowns;

console.log(otherTowns(myCountry))