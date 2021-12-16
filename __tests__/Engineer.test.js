const Engineer = require('../lib/Engineer')

describe('an Engineer', () =>{
    engineerProperty = {
        githubUsername:'mukey6'
    }
const engineer = new Engineer(engineerProperty)

test('will have github usernmae of mukey', () =>{
expect(engineer.githubUsername).toBe('mukey6')
})

})

