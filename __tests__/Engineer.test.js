const Engineer = require('../lib/Engineer')

describe('an Engineer', () =>{
    engineerProperty = {
        name: 'Muktar',
        employeeId: '223344',
        email:'muktar@gmail.com',
        githubUsername:'mukey6'
    }
const engineer = new Engineer(engineerProperty)

Test('will have engineers name Muktar', () =>{
    expect(engineer.name).toBe('Muktar')
})

test('will have employee ID of 223344', () =>{
    expect(engineer.employeeId).toBe('223344')
})

test('will have email of muktar@gmail.com', () =>{
    expect(engineer.email).toBe('muktar@gmail.com')
})

test('will have github usernmae of mukey', () =>{
expect(engineer.githubUsername).toBe('mukey6')
})

})


