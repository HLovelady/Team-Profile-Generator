const Employee = require('../lib/Employee');

//testing the employee.js file making sure there are no errors
describe("Employee", () => {
    it("should return the name passed into the function", () => {
        const newEmp = new Employee("Sydney", "5", "sydney@examplecompany.org");
        const testName = newEmp.getName();
        expect(testName).toBe("Sydney");
    });
    it("should return the ID passed into the function", () => {
        const newEmp = new Employee("Sydney", "5", "sydney@examplecompany.org");
        const testId = newEmp.getId();
    
        expect(testId).toBe("5");
    });
    
    it("should return the email passed into the function", () => {
        const newEmp = new Employee("Sydney", "5", "sydney@examplecompany.org");
        const testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("sydney@examplecompany.org");
    });
    
    it("should return the role passed into the function", () => {
        const newEmp = new Employee("Sydney", "5", "sydney@examplecompany.org");
        const testRole = newEmp.getRole();
    
        expect(testRole).toBe("Employee");
    });
});