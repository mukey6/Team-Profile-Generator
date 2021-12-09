const Intern = require('../lib/Intern')

describe ("an Intern ", ()=>{
    internProperty = {
        name: 'Mike',
        email:'Mike@gmail.com',
        employeeId:'112233',
        school:'University of MN'
    }
const intern = new Intern(internProperty)
test('will have a name Mike',() =>{
    expect(intern.name).toBe('Mike')

})
test('will have an email Mike@gmail.com', ()=>{

    expect(intern.email).toBe('Mike@gmail.com')
})

test('will have an employee ID 112233', ()=>{

    expect(intern.employeeId).toBe('112233')
})

test('will have school by the name of UofM', ()=>{

    expect(intern.school).toBe('University of MN')
})
})
