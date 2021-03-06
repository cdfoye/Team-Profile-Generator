// import the Intern.js file
const Intern = require('../lib/Intern');

// two tests to make sure the Intern.js file is working properly
describe('Intern', () => {
    describe('getSchool', () => {
        it("should return the school of the intern", () => {
            const school = 'Purdue';

            const result = new Intern('Tesla', 1, 'email@email.com', school);

            expect(result.school).toEqual(school);
        })
    });

    describe('getRole', () => {
        it("should return the role of the Intern", () => {
            const role = 'Intern';

            const result = new Intern('Tesla', 1, 'email@email.com', 'Purdue');

            expect(result.getRole()).toBe(role);
        })
    });
});