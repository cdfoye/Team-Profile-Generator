// import the employee class and save to a new constant
const Employee = require('./Employee');

// create a new Manager class that extends the Employee class with name, id, email, and officeNumber properties
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // use information from the Employee constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // getofficeNumber method to return the managers office number
    getofficeNumber() {
        return this.officeNumber;
    }

    // getRole method that will return 'Mangager'
    getRole() {
        return 'Manager';
    }
}

// export the Manager class to be used elsewhere
module.exports = Manager;