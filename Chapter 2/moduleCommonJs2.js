import { personAgeNat, displayFavoriteActivities } from "./moduleCommonJs";

let Person = {
    name: "Peter",
    age: 40,
    nationality: "Cameroonian"
}

console.log(personAgeNat(Person))
console.log(displayFavoriteActivities(Person));

const {greet} = require('./moduleCommonJs')
console.log(Person.greet())