// using Employee constructor 
const Employee = require('../lib/Employee');


//testing the employee.js file making sure there are no errors
describe('gets employee name', () => {
    const employee = new Employee('Rachel', 55, 'rachel@fake.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Rachel', 55, 'rachel@fake.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Rachel', 55, 'rachel@fake.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Rachel', 55, 'rachel@fake.com');

    expect(employee.getRole()).toEqual("Employee");
}); 