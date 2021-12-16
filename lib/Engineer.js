const Employee = require('../lib/Employee')


class Engineer extends Employee{
    constructor(obj){
   super(obj)
    this.githubUsername = obj.githubUsername
    this.job = obj.job
    }
}




    module.exports = Engineer;