//employee class with constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const questions = [
    {
        type: 'list',
        message: 'Select the employee role.',
        name: 'role',
        choices: [
            { value: 'Manager' },   //manager role
            { value: 'Engineer' },  //engineer role
            { value: 'Intern' },  //intern role
        ]
    }
];

//getName function
getName()

//getID function
getId()

//getEmail function
getEmail()

//getRole function
getRole()

//allows engineer.js, intern.js, and manager.js to use this fils
module.exports = Employee;