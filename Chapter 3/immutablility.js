/**
 * Immutability deals with unchangeability
 */
let colorLawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

var rateColor = (color, rating) => Object.assign({}, color, {rating:rating});

console.log(rateColor(colorLawn, 5).rating);
console.log(colorLawn.rating);

const rateColorES6 = (color, rating) => ({...color}, rating);
console.log(rateColorES6(colorLawn, 7));

let listOfColors = [
    { title: "Red"},
    { title: "Green"},
    { title: "Yellow"}
];

const addColor = (title, list) => [...list, {title}]