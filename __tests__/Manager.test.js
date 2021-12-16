const Manager = require('../lib/Manager.js');

describe ("a manager ", ()=>{
    managerProperty = {
        officeNumber:'10'
    }
const manager = new Manager(managerProperty)


test('will have an office number 10', ()=>{

    expect(manager.officeNumber).toEqual('10')
})
})