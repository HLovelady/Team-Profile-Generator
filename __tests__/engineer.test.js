const Engineer = require('../lib/Engineer');

//testing the engineer.js file making sure there are no errors
describe("Engineer", () => {
    it("should return the name passed in to the function", () => {
        //Arrange
        const newEmp = new Engineer("Jessica", "2", "Jessica@examplecompany.org", "jessgit");
        //Act
        const testName = newEmp.getName();
        //Assert
        expect(testName).toBe("Jessica");
    });

    it("should return the ID passed in", () => {
        const newEmp = new Engineer("Jessica", "2", "Jessica@examplecompany.org", "jessgit");
        const testId = newEmp.getId();
    
        expect(testId).toBe("2");
    });
    
    it("should return the email passed in", () => {
        const newEmp = new Engineer("Jessica", "2", "Jessica@examplecompany.org", "jessgit");
        const testEmail = newEmp.getEmail();
    
        expect(testEmail).toBe("Jessica@examplecompany.org");
    });

    it("should return the github username passed in", () => {
        const newEmp = new Engineer("Jessica", "2", "Jessica@examplecompany.org", "jessgit");
        const testGithub = newEmp.getGithub();

        expect(testGithub).toBe("jessgit");
    });
    
    it("should return the role passed in", () => {
        const newEmp = new Engineer("Jessica", "2", "Jessica@examplecompany.org", "jessgit");
        const testRole = newEmp.getRole();
    
        expect(testRole).toBe("Engineer");
    });
});