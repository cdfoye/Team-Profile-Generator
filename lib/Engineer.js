// import the Employee class and save to a new constant
const Employee = require('./Employee');

// create new Engineer class that extends the Employee class and has the name, id, email, and gihub properties
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // use information from the Employee constructor
        super(name, id, email);
        this.github = github;
    }

    // getGithub method to return the employee github username
    getGithub() {
        return this.github;
    }

    // getRole method that will return 'Engineer"
    getRole() {
        return 'Engineer';
    }
}

// export the Engineer class to be used elsewhere
module.exports = Engineer;