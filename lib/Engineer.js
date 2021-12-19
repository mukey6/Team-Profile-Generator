const Employee = require('../lib/Employee')


class Engineer extends Employee{
    constructor(name, email, employeeId, githubUsername ){
   super(name, email, employeeId)
    this.githubUsername = githubUsername
    this.role = 'engineer'


    }
}




    module.exports = Engineer;