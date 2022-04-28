const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it("should return the name of the employee", () => {
            const name = 'Tesla';

            const result = new Employee(name);

            expect(result.name).toEqual(name);
        })
    });
});