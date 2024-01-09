/**
 * Functional programming is all about transforming data
 * from one form to another
 */
const universityInCameroon = [
    "University of Buea",
    "University of Ngoa-Ekele",
    "University of Soa",
    "University of Ngaoundere"
];

//Array.join: Extract delimited strings from an array
console.log(universityInCameroon
    .join(' - '));

//Array.filter: Produces a new array from a source array
//It takes a predicate as argument
let myRegex = new RegExp('Ngaoundere$');
console.log(universityInCameroon.
    filter(school => !myRegex.test(school)));

//Array.map: Takes a function as argument invoked once for
//every element
console.log(universityInCameroon.
    map(school => school.
        replace(/University of /, ''))); //

console.log(universityInCameroon
    .map(school => ({ name: school}))) //Array of university object

const editName = (oldName, name, arr) =>
    arr.map(item => (item.name === oldName) ?
        ({...item, name}) : item
    );

console.log(editName(
   "University of Buea",
   "UB",
    universityInCameroon.map(school => ({name: school}))
    ));

    const colors = [
    { 
        id: '-xekare',
        title: "rad red", 
        rating: 3 
    }, 
    { 
        id: '-jbwsof',
        title: "big blue", 
        rating: 2 
    }, 
    { 
        id: '-prigbj',
        title: "grizzly grey", 
        rating: 5 
    },
    { 
        id: '-ryhbhsl',
        title: "banana", 
        rating: 1 
    }
]
const hashColors = colors.reduce(
    (hash, {id, title, rating}) => {
        hash[id] = {title, rating}
        return hash
    }, 
    {}
)
console.log(hashColors);

const myColors = ["blue", "blue", "green" ,"red", "turquoise"];
const distinctColors = myColors.reduce(
    (distinct, color) =>
        (distinct.indexOf(color) !== -1) ? distinct : [...distinct, color], 
    []
);
console.log(distinctColors)