// link to page creation
const generateHTML = require('./src/generateHTML');

// node modules & packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const employee = require('./lib/Employee');

// team profiles
const { manager } = require('./lib/Manager');
const { engineer } = require('./lib/Engineer');
const { intern } = require('./lib/Intern');


//Role question
const roleQuestion = () => {
    return inquirer.prompt ([
        { 
            //list options for Role to be selected
            type: 'list',
            message: 'Select the employee role.',
            name: 'role',
            choices: [
                { value: 'Manager' },   //manager role
                { value: 'Engineer' },  //engineer role
                { value: 'Intern' },  //intern role
            ]
        }
    ])
};

// Manager questions for user input
const managerQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'Team Manager name: ',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Team Manager ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Team Manager email: ',
            name: 'Email',
        },
        {
            type: 'input',
            message: 'Office Number: ',
            name: 'officeNumber',
        }
    ])
    //promise to add manager information
    .then(managerAdd => {
        const  { name, id, email, officeNumber } = managerAdd; 
        const manager = new Manager (name, id, email, officeNumber);

        //log manager information
        console.log(manager); 
    })
};

// Engineer questions for user input
const engineerQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'Team Engineer name: ',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Team Engineer ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Team Engineer email: ',
            name: 'Email',
        },
        {
            type: 'input',
            message: 'Team Engineer GitHub Username: ',
            name: 'github',
        }
    ])
};

// Intern questions for user input
const internQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'Inter name: ',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Inter ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Inter email: ',
            name: 'Email',
        },
        {
            type: 'input',
            message: 'Intern current school: ',
            name: 'school',
        }
    ])
};