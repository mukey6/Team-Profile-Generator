const Employee = require('../lib/Employee')


class Intern extends Employee{
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