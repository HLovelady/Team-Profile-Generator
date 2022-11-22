const Intern = require('../lib/Intern');

//testing the intern.js file making sure there are no errors
describe("Intern", () => {
    it("should return the name passed into function", () => {
        const newEmp = new Intern("Kyle", "4", "kyle@examplecompany.org", "University of Texas at Austin");
        const testName = newEmp.getName();
        expect(testName).toBe("Kyle");
    });

    it("should return the ID passed into function", () => {
        const newEmp = new Intern("Kyle", "4", "kyle@examplecompany.org", "University of Texas at Austin");
        const testId = newEmp.getId();
    
        expect(testId).toBe("4");
    });
    
    it("should return the Email passed into function", () => {
        const newEmp = new Intern("Kyle", "4", "kyle@examplecompany.org", "University of Texas at Austin");
        const testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("kyle@examplecompany.org");
    });
    
    it("should return the School passed into function", () => {
        const newEmp = new Intern("Kyle", "4", "kyle@examplecompany.org", "University of Texas at Austin");
        const testSchool = newEmp.getSchool();
    
        expect(testSchool).toBe("University of Texas at Austin");
    });

    it("should return the Role passed into function", () => {
        const newEmp = new Intern("Kyle", "4", "kyle@examplecompany.org", "University of Texas at Austin");
        const testRole = newEmp.getRole();
    
        expect(testRole).toBe("Intern");
    });
});