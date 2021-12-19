const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, email, employeeId, school) {
    super(name, email, employeeId);
    this.school = school;
    this.role = "intern";
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "intern";
  }
}

module.exports = Intern;
