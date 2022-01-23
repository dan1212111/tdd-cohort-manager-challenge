const Cohort = require("../src/cohorts.js");
const Student = require("../src/student.js");

describe("Cohorts", () => {
  let cohort;

  beforeEach(() => {
    cohort = new Cohort();
  });

  it("add student", () => {
    //set up
    const expected = new Student("Angelina Jolie", 18);

    //execute
    const result = cohort.addStudent("Angelina Jolie", 18);

    //verify
    expect(expected).toEqual(result);
  });

  it("remove a student", () => {
    //set up
    const expected = [
      new Student("James Brown", 20),
      new Student("Nina Simone", 21),
    ];

    //execute
    cohort.addStudent("James Brown", 20);
    cohort.addStudent("Jacob Collier", 19);
    cohort.addStudent("Nina Simone", 21);
    const result = cohort.removeStudent("Jacob Collier");

    //verify
    expect(result).toEqual(expected);
  });

  it("find student by name", () => {
    //set up
    const expected = new Student("Hans Zimmer", 25);

    //execute
    cohort.addStudent("James Brown", 20);
    cohort.addStudent("Jacob Collier", 19);
    cohort.addStudent("Nina Simone", 21);
    cohort.addStudent("Hans Zimmer", 25);
    const result = cohort.findStudentBy("Hans Zimmer");

    //verify
    expect(result).toEqual(expected);
  });

  it("find student by name - not found", () => {
    //set up
    const expected = "Student Not Found";

    //execute
    cohort.addStudent("James Brown", 20);
    cohort.addStudent("Jacob Collier", 19);
    cohort.addStudent("Nina Simone", 21);
    cohort.addStudent("Hans Zimmer", 25);
    const result = cohort.findStudentBy("Frank Sinatra");

    //verify
    expect(result).toEqual(expected);
  });
});
