// import the Engineer.js file
const Engineer = require('../lib/Engineer');

// two tests to make sure the Engineer.js file is working properly
describe('Engineer', () => {
    describe('getGithub', () => {
        it("should return the Github username of the employee", () => {
            const github = 'tessyzee';

            const result = new Engineer('Tesla', 1, 'email@email.com', github);

            expect(result.github).toEqual(github);
        })
    });

    describe('getRole', () => {
        it("should return the role of the Engineer", () => {
            const role = 'Engineer';

            const result = new Engineer('Tesla', 1, 'email@email.com', 'tessyzee');

            expect(result.getRole()).toBe(role);
        })
    });
});