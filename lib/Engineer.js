const Character = require('../lib/Character')


class Engineer extends Character{
    constructor(obj){
   super(obj)
    this.githubUsername = obj.githubUsername
    this.job = obj.job
    }
}




    module.exports = Engineer;