const Cohort = require("../src/cohorts.js");
const Student = require("../src/student.js");

describe("Cohorts", () => {
  let cohort;

  beforeEach(() => {
    cohort = new Cohort();
  });

  it("add student", () => {
    //set up
    const expected = new Student("Angelina Jolie", 18, 1434, "joli14", "angel4@outlook.com");

    //execute
    const result = cohort.addStudent("Angelina Jolie", 18, 1434, "joli14", "angel4@outlook.com");

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

  it("find student by id", () => {
    //set up
    const expected = new Student("Hans Zimmer", 25, 1453, "hans232", "hans@outlook.com");

    //execute
    cohort.addStudent("James Brown", 20, 626);
    cohort.addStudent("Jacob Collier", 19, 287);
    cohort.addStudent("Nina Simone", 21, 7821);
    cohort.addStudent("Hans Zimmer", 25, 1453, "hans232", "hans@outlook.com");
    const result = cohort.findStudentByID(1453);

    //verify
    expect(result).toEqual(expected);
  });

  it("find student by id - not found", () => {
    //set up
    const expected = "Student Not Found"

    //execute
    cohort.addStudent("James Brown", 20, 626);
    cohort.addStudent("Jacob Collier", 19, 287);
    cohort.addStudent("Nina Simone", 21, 7821);
    cohort.addStudent("Hans Zimmer", 25, 1453, "hans232", "hans@outlook.com");
    const result = cohort.findStudentByID(862);

    //verify
    expect(result).toEqual(expected);
  });

  it("add student - max capacity 24", () => {
    //set up
      cohort.addStudent("ALenn", 18)
      cohort.addStudent("Bobby", 18)
      cohort.addStudent("Louis Jolie", 18)
      cohort.addStudent("Steven Jolie", 18)
      cohort.addStudent("James Jolie", 18)
      cohort.addStudent("Cat Jolie", 18)
      cohort.addStudent("Run Jolie", 18)
      cohort.addStudent("Goodle Jolie", 18)
      cohort.addStudent("Youtube Jolie", 18)
      cohort.addStudent("FacebookeJolie", 18)
      cohort.addStudent("MaggJolie", 18)
      cohort.addStudent("MaggieJolie", 18)
      cohort.addStudent("alanna Jolie", 18)
      cohort.addStudent("micheal Jolie", 18)
      cohort.addStudent("hat Jolie", 18)
      cohort.addStudent("boot Jolie", 18)
      cohort.addStudent("lingo Jolie", 18)
      cohort.addStudent("food Jolie", 18)
      cohort.addStudent("burger Jolie", 18)
      cohort.addStudent("maciies", 18)
      cohort.addStudent("kfc", 18)
      cohort.addStudent("nandos", 18)
      cohort.addStudent("more kfc", 18)
      cohort.addStudent("and then some", 18)
      cohort.addStudent("and then some more", 18)

    const expected = "Max Student Capacity - 24"

    //execute
    const result = cohort.addStudent("Angelina Jolie", 18);

    //verify
    expect(result).toEqual(expected);
  });

  it("can't add same student", () => {
    //set up
    const expected = "Student Already Exist"

    //execute
    cohort.addStudent("Hans Zimmer", 25, 1453, "hans232", "hans@outlook.com");
    cohort.addStudent("Angelina Jolie", 18, 1434, "joli14", "angel4@outlook.com");
    const result = cohort.addStudent("Angelina Jolie");

    //verify
    expect(result).toEqual(expected);
  });

  it("can't remove student that doesn't exist", () => {
    //set up
    const expected = "Student Doesn't Exist"

    //execute
    cohort.addStudent("James Brown", 20);
    cohort.addStudent("Jacob Collier", 19);
    cohort.addStudent("Nina Simone", 21);
    const result = cohort.removeStudent("Micheal Angelo");

    //verify
    expect(result).toEqual(expected);
  });
});
