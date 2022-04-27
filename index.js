// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// import classes
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const content = require('./lib/Employee');

// html for employee cards
const managerHTML = require('./src/ManagerTemplate');
const engineerHTML = require('./src/EngineerTemplate');
const internHTML = require('./src/InternTemplate');
const contentHTML = require('./src/EmployeeTemplate');

// empty array for team members added
const myTeam = [];

// startup questions to build team starting with manager info
const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter the team managers name: ',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter managers employee ID: ',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter managers email: ',
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'Enter managers office number: ',
        },
    ])
    .then(response => {
        const Manager = new manager(
            response.managerName,
            response.managerId,
            response.managerEmail,
            response.managerOffice
        );
        const managerBuild = managerHTML(Manager);
        myTeam.push(managerBuild);
        moreTeam();
    });

    // ask the user if they want to add an engineer or intern to their team or if they are finished
    function moreTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'moreMembers',
                message: 'Would you like to add more members to your team?',
                choices: [
                    'Add an Engineer to my team',
                    'Add an Intern to my team',
                    'No, Im done. Finish building my team.',
                ],
            },
        ])
        .then(response => {
            switch (response.moreTeam) {
                case 'Add an Engineer to my team': 
                    addEngineer();
                    break;
                case 'Add an Intern to my team':
                    addIntern();
                    break;
                case 'No, Im done. Finish building my team.':
                    completeTeam();
                    break;
            }
        });
    }

    const addEngineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter the Engineers name: ',
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Enter the Engineers employee ID: ',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter the Engineers email: ',
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Enter the Engineers Github username: ',
            },
        ])
        .then(response => {
            const Engineer = new engineer(
                response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGithub
            );
            const engineerBuild = engineerHTML(Engineer);
            myTeam.push(engineerBuild);
            moreTeam();
        });
    };

    
};

// function to initialize app
const init = () => {
    questions()
    // used writeFileSync method to use promises instead of a callback function
    .then((data) => fs.writeFileSync('newREADME.md', generateMarkdown(data)))
    .then(() => console.log('README successfully created'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
