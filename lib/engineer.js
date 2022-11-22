//connecting to employee.js file
const Employee = require('../lib/employee')

//employee class with constructor
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, email, id);
        this.github = github;
    }

    //getGithub function
    getGithub() {
        return this.github
    }

    //getRole function
    getRole() {
        return "Engineer"
    }
}




module.exports = Engineer;