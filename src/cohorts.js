const Student = require("./student");

class Cohort {
  constructor(name) {
    this.name = name;
    this.students = [];
  }

  addStudent(name, age) {
    const student = new Student(name, age);
    this.students.push(student);
    return student;
  }

  removeStudent(name) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        this.students.splice(i, 1);
        return this.students;
      }
    }
  }

  findStudentBy(name) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        return this.students[i];
      }
    }
    return "Student Not Found";
  }
}

module.exports = Cohort;
