const Employee = require('../lib/Employee')


class Intern extends Employee{
    constructor(name, email, employeeId, school){
   super(name, email, employeeId)
    this.school = school
    this.role = 'intern'
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