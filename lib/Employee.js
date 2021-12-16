class Employee {
    constructor(obj){
        this.name = obj.name
        this.email = obj.email
        this.employeeId = obj.employeeId
      }

      getName(){
        return this.name
    };

    getEmail(){
        return this.email
    }
    getId(){
        return this.employeeId
    }
} 



module.exports = Employee;
