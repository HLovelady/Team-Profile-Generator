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

//getSchool function
getSchool()