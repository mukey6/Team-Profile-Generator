const Employee = require('../lib/Employee');

describe ("an employee ", ()=>{
    managerProperty = {
        name: 'Dave',
        email:'dave@gmail.com',
        employeeId:'123456',
        
    }
const employee = new Employee(managerProperty)
test('will have a name Dave',() =>{
    expect(employee.name).toBe('Dave')
    expect(employee.getName()).toBe('Dave')

})
test('will have an email dave@gmail.com', ()=>{

    expect(employee.email).toEqual('dave@gmail.com')
    expect(employee.getEmail()).toBe('dave@gmail.com')
})

test('will have an employee ID 123456', ()=>{

    expect(employee.employeeId).toEqual('123456')
    expect(employee.getId()).toEqual('123456')
})
})

