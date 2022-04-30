// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// import classes
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

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
            name: 'officeNumber',
            message: 'Enter managers office number: ',
        },
    ])
    // once the user finishes answering the prompt then pass the data into the managerHTML and push that html into the moreTeam array
    .then(response => {
        const Manager = new manager(
            response.managerName,
            response.managerId,
            response.managerEmail,
            response.officeNumber
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
        // go to addEngineer or addIntern functions, or complete building and create the new file depending on what the user selected
        .then(answers => {
            switch (answers.moreMembers) {
                case 'Add an Engineer to my team': {
                    addEngineer();
                    break;
                }
                case 'Add an Intern to my team': {
                    addIntern();
                    break;
                }
                case 'No, Im done. Finish building my team.': {
                    completeTeam();
                    break;
                }
            }
        });
    };

    // prompt for the user to enter info about the engineer
    const addEngineer = () => {
        console.log('Enter Engineer info');
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
        // once the user finishes answering the prompt then pass the data into the engineerHTML and push that html into the moreTeam array. call the moreTeam function to bring up the menu again
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

    // prompt for the user to enter info about the intern
    const addIntern = () => {
        inquirer.prompt([
            {
                type:'input',
                name: 'internName',
                message: 'Enter the Interns name: ',
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Enter the Interns employee ID: ',
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter the Interns email: ',
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Enter the Interns school: ',
            },
        ])
        // once the user finishes answering the prompt then pass the data into the internHTML and push that html into the moreTeam array. call the moreTeam function to bring up the menu again
        .then(response => {
            const Intern = new intern(
                response.internName,
                response.internId,
                response.internEmail,
                response.internSchool
            );
            const internBuild = internHTML(Intern);
            myTeam.push(internBuild);
            moreTeam();
        })
    };

    // when the user is finished building their team then join the myTeam array and assign it to a new variable createTeam
    // write a new file called newTeam.html and save it to the dist folder using the contentHTML and passing the createTeam variable into contentHTM
    function completeTeam() {
        const createTeam = myTeam.join('');
        fs.writeFileSync('./dist/newTeam.html', contentHTML(createTeam));
        console.log('/n-----------------/n')
        console.log('newTeam.html file created');
    };
};

// initialize the app and start the prompt questions
questions();