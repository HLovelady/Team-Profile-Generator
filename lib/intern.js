//connecting to employee.js file
const Employee = require('./employee')

//Intern class with constructor
class intern extends Employee {
    constructor(name, id, email, school){
        this.name = name;
        this.is = id;
        this.email = email;
        this.school = school;
    }
}

// Intern question for user input
const schoolQuestion = [
    {
        type: 'input',
        message: 'Intern current school: ',
        name: 'school',
    }
];

//getSchool function
getSchool()

module.exports = Intern;