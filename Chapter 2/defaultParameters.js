let displaySchool = (school = "Not specified") => school;
console.log(displaySchool());
console.log(displaySchool("University of Buea"));

let defaultPerson = {
    name : {
        firstName: "Brian",
        lastName: "Stacy"
    },
    favActivity: ["Basketball", "Football"],
    myAction : () => "I am action"
};

let logFavActivity = ({favActivity}) => favActivity;
console.log(logFavActivity(defaultPerson));

let myPersonAction = (Person) => Person.myAction()
console.log(myPersonAction(defaultPerson))