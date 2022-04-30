// import the employee.js file
const Employee = require('../lib/Employee');

// four tests to make sure the Employee.js file is working properly
describe('Employee', () => {
    describe('getName', () => {
        it("should return the name of the employee", () => {
            const name = 'Tesla';

            const result = new Employee(name);

            expect(result.name).toEqual(name);
        })
    });

    describe('getId', () => {
        it("should return the id of the employee", () => {
            const id = 1;

            const result = new Employee('Tesla', id);

            expect(result.id).toEqual(id);
        })
    });

    describe('getEmail', () => {
        it("should return the email of the employee", () => {
            const email = 'email@email.com';

            const result = new Employee('Tesla', 1, email);

            expect(result.email).toEqual(email);
        })
    });

    describe('getRole', () => {
        it("should return the role of the employee", () => {
            const role = 'Employee';

            const result = new Employee('Tesla', 1, 'email@email.com');

            expect(result.getRole()).toBe(role);
        })
    });
});