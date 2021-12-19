class Employee {
    constructor(name, email, employeeId){
        this.name = name
        this.email = email
    employeeId
        this.role = 'employee'
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
    
    getRole(){
        return this.role
    }
} 



module.exports = Employee;
