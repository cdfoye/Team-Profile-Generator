// import the Manager.js file
const Manager = require('../lib/Manager');

// two tests to make sure the Manager.js file is working properly
describe('Manager', () => {
    describe('getofficeNumber', () => {
        it("should return the office number of the Manager", () => {
            const officeNumber = 20;

            const result = new Manager('Tesla', 1, 'email@email.com', officeNumber);

            expect(result.officeNumber).toEqual(officeNumber);
        })
    });

    describe('getRole', () => {
        it('should return the role of the Manager', () => {
            const role = 'Manager';

            const result = new Manager('Tesla', 1, 'email@email.com', 20);

            expect(result.getRole()).toBe(role);
        })
    });
});