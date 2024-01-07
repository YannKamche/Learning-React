/**
 * Class in 
 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    method() {
        console.log("eat")
    }
};

let myPerson = new Person("yann", 20);
console.log(myPerson);

Person.prototype.eat = () => "I am eating";
console.log(myPerson);

console.log(myPerson.hasOwnProperty('eat'))
