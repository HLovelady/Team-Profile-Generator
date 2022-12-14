// link to page creation
const generateHTML = require('./src/generateHTML');


// node modules & packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// team profiles js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


//Team array
const teamArray = [];


//Manager prompts array
const managerPrompts = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manger's name:"   
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        },
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const otherEmployeePrompts = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role on the team?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is this employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's GitHub username?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does this intern attend?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'continueAdding',
            message: "Would you like to add more team members?",
            default: false
        },
    ])
    .then(employeeInput => {
        //Handling different employee types
        let {name, id, email, role, github, school, continueAdding} = employeeInput
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }
        else {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if (continueAdding) {
            return otherEmployeePrompts(teamArray);
        }
        else {
            return teamArray;
        }
    })
};

//Function to generate HTML file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        //Error 
        if (err) {
            console.log(err);
            return;
        //Success 
        } else {
            console.log('You have successfully generated your team profile!')
        }
    })
}; 

managerPrompts()
  .then(otherEmployeePrompts)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });