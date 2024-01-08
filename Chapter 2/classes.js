/**
 * Class in 
 */
class Person {
    #nationality;
    constructor(name, age) {
        this._name = name;
        this.age = age;
    };

    method() {
        console.log("eat");
    }

    get name() {
        return this._name;
    };

    set name(value) {
        this._name = value;
    };

    get nationality() {
        return this.#nationality;
    }
    set nationality(value) {
        this.#nationality = value;
    }
};

let myPerson = new Person("yann", 20);
console.log(myPerson);

Person.prototype.eat = () => "I am eating";
console.log(myPerson);

console.log(myPerson.hasOwnProperty('eat'))

myPerson.name = "Yann Kamche";
console.log(myPerson.name);

myPerson.nationality = "Cameroonian";
console.log(myPerson.nationality)
