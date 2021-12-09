const Character = require('../lib/Character')

class Manager extends Character{
constructor(obj){
    super(obj);
// this.name = obj.name
// this.email = obj.email
// this.employeeId = obj.employeeId
this.officeNumber = obj.officeNumber
}
}







module.exports = Manager;

