const Engineer = require('../lib/Engineer');

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