const Manager = require('../lib/Manager');

//testing the manager.js file making sure there are no errors
describe("Manager", () => {
    it("should return the name passed into the function", () => {
        const newEmp = new Manager("Gunner", "1", "gunner@examplecompany.org", "256");
        const testName = newEmp.getName();
        expect(testName).toBe("Gunner");
    });

    it("should return the ID passed into the function", () => {
        const newEmp = new Manager("Gunner", "1", "gunner@examplecompany.org", "256");
        const testId = newEmp.getId();
    
        expect(testId).toBe("1");
    });
    
    it("should return the email passed into the function", () => {
        const newEmp = new Manager("Gunner", "1", "gunner@examplecompany.org", "256");
        const testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("gunner@examplecompany.org");
    });
    
    it("should return the office number passed into the function", () => {
        const newEmp = new Manager("Gunner", "1", "gunner@examplecompany.org", "256");
        const testOfficeNumber = newEmp.getOfficeNumber();
    
        expect(testOfficeNumber).toBe("256");
    });

    it("should return the role passed into the function", () => {
        const newEmp = new Manager("Gunner", "1", "gunner@examplecompany.org", "256");
        const testRole = newEmp.getRole();
    
        expect(testRole).toBe("Manager");
    });
});