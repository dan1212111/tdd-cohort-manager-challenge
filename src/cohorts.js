const Student = require('./student')
const STUDENT_EXIST = 'Student Already Exist'
const MAX_CAPACITY = 'Max Student Capacity - 24'
const STUDENT_NONE_EXISTANT = "Student Doesn't Exist"
const NOT_FOUND = 'Student Not Found'

class Cohort {
  constructor (name) {
    this.name = name
    this.students = []
  }

  addStudent (name, age, studentID, username, email) {
    const student = new Student(name, age, studentID, username, email)
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        return STUDENT_EXIST
      }
    }
    if (this.students.length < 25) {
      this.students.push(student)
      console.log(
        `Congratulations. You have successfully added a new Student, ${student}`
      )
      return student
    }
    return MAX_CAPACITY
  }

  removeStudent (name) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        this.students.splice(i, 1)
        return this.students
      }
    }
    return STUDENT_NONE_EXISTANT
  }

  findStudentBy (name) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        return this.students[i]
      }
    }
    return NOT_FOUND
  }

  findStudentByID (id) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].studentID === id) {
        return this.students[i]
      }
    }
    return NOT_FOUND
  }
}

module.exports = Cohort
