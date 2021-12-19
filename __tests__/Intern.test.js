const Intern = require('../lib/Intern')

describe ("an Intern ", ()=>{
   
const intern = new Intern('Dave', 'dave@gmail.com', '123456','University of MN')

test('will have school by the name of UofM', ()=>{

    expect(intern.school).toBe( 'University of MN')
})

test('getRole() should return intern', ()=>{

    expect(intern.getRole()).toBe( 'intern')
})

test('getSchool() should return University of MN', ()=>{

    expect(intern.getSchool()).toBe( 'University of MN')
})
})
