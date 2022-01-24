const Student = require("./student");
// const SMS = require("./sms");

class Cohort {
  constructor(name) {
    this.name = name;
    this.students = [];
  }

  addStudent(name, age, studentID, username, email) {
    const student = new Student(name, age, studentID, username, email);
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        return "Student Already Exist";
      }
    }
    if (this.students.length < 25) {
      this.students.push(student);
      console.log(`Congratulations. You have successfully added a new Student, ${student}`)
      return student;
    }
    return "Max Student Capacity - 24";
  }

  removeStudent(name) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        this.students.splice(i, 1);
        return this.students;
      }
    }
    return "Student Doesn't Exist"
  }

  findStudentBy(name) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        return this.students[i];
      }
    }
    return "Student Not Found";
  }

  findStudentByID(id) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].studentID === id) {
        return this.students[i];
      }
    }
    return "Student Not Found";
  }
}

module.exports = Cohort;
