const Manager = require('../lib/Manager.js');

describe ("a manager ", ()=>{
const manager = new Manager('Dave', 'dave@gmail.com', '123456','10')


test('will have an office number 10', ()=>{

    expect(manager.officeNumber).toEqual('10')
})

test('getRole() should return manager', ()=>{

    expect(manager.getRole()).toEqual('manager')
})

})
