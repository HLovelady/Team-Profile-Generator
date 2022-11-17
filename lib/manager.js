//connecting to employee.js file
const Manager = require('./employee')

//Manager class with constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.is = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
}
//getOfficeNumber function
getOfficeNumber()