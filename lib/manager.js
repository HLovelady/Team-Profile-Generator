//connecting to employee.js file
const Manager = require('./employee')

//Manager class with constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    //getOfficeNumber function
    getOfficeNumber()

    //getRole function
    getRole(){
        return 'Employee';
    }
}


module.exports = Manager;