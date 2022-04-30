// create new Employee class with name, id, and email properties
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getName method to return the employee name
    getName() {
        return this.name;
    }

    // getId method to return the employee id
    getId() {
        return this.id;
    }

    // getEmail method to return the employee email
    getEmail() {
        return this.email;
    }

    // getRole method that returns 'Employee'
    getRole() {
        return 'Employee';
    }
}

// export this class to be imported elsewhere
module.exports = Employee;