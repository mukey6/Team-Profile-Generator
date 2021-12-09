const Character = require('../lib/Character')


class Intern extends Character{
    constructor(obj){
   super(obj)
    this.school = obj.school
    }
}


    module.exports = Intern;



// class Intern {
//     constructor(object){
//     this.name = object.name
//     this.email = object.email
//     this.employeeId = object.employeeId
//     this.school = object.school
//     }
// }