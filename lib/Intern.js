// import the Employee class and save to a new constant
const Employee = require('./Employee');

// create a new Intern class that extends the Employee class with name, id, email, and school properties
class Intern extends Employee {
    constructor(name, id, email, school) {
        // use information from the Employee constructor
        super(name, id, email);
        this.school = school;
    }

    // getSchool method that will return the interns school name
    getSchool() {
        return this.school;
    }

    // getRole method that will return 'Intern'
    getRole() {
        return 'Intern';
    }
}

// export the Intern class to be used elsewhere
module.exports = Intern;