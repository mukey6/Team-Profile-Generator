const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, email, employeeId, officeNumber) {
    super(name, email, employeeId);
    this.officeNumber = officeNumber;
    this.role = "manager";
  }

  getRole() {
    return "manager";
  }
}

module.exports = Manager;
