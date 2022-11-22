//connecting to employee.js file
const Employee = require('../lib/employee')

//Intern class with constructor
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, email, id);
        this.school = school;
    }
    //getSchool function
    getSchool() {
        return this.school
    }

    //getRole function
    getRole(){
        return 'Employee';
    }
}

module.exports = Intern;