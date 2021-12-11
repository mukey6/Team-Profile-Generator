const Manager = require('../lib/Manager.js');

describe ("a manager ", ()=>{
    managerProperty = {
        name: 'Dave',
        email:'dave@gmail.com',
        employeeId:'123456',
        officeNumber:'10'
    }
const manager = new Manager(managerProperty)
test('will have a name Dave',() =>{
    expect(manager.name).toBe('Dave')

})
test('will have an email dave@gmail.com', ()=>{

    expect(manager.email).toEqual('dave@gmail.com')
})

test('will have an employee ID 123456', ()=>{

    expect(manager.employeeId).toEqual('123456')
})

test('will have an office number 10', ()=>{

    expect(manager.officeNumber).toEqual('10')
})
})