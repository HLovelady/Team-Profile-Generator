//connecting to employee.js file
const Employee = require('./employee')

//employee class with constructor
class Engineer extends Employee {
    constructor(name, id, email, github){
        this.name = name;
        this.is = id;
        this.email = email;
        this.github = github;
    }
}

// Engineer questions for user input
const gitHubQuestion = [
    {
        type: 'input',
        message: 'Employee GitHub username: ',
        name: 'github',
    }
];

//getGithub function
getGithub()

module.exports = Engineer;