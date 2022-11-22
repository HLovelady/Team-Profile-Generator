//employee class with constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //getName function
    getName() {
        return this.name;
    }

    //getID function
    getId(){
     return this.id;
    }

    //getEmail function
    getEmail(){
        return this.email;
    }

    //getRole function
    getRole(){
        return 'Employee';
    }
};

//allows engineer.js, intern.js, and manager.js to use this file
module.exports = Employee;