//connecting to employee.js file
const Employee = require('../lib/employee')

//Manager class with constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, email, id);
        this.officeNumber = officeNumber;
    }

    //getOfficeNumber function
    getOfficeNumber() {
        return this.officeNumber
    }

    //getRole function
    getRole(){
        return 'Manager';
    }
}


module.exports = Manager;