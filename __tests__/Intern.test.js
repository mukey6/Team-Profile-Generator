const Intern = require('../lib/Intern')

describe ("an Intern ", ()=>{
    internProperty = {
        school:'University of MN'
    }
const intern = new Intern(internProperty)

test('will have school by the name of UofM', ()=>{

    expect(intern.school).toBe('University of MN')
})
})
