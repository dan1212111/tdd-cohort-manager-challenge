const Boolean = require("../src/boolean.js");
const Cohort = require("../src/cohorts.js");

describe("Boolean", () => {
  let boolean;

  beforeEach(() => {
    boolean = new Boolean();
  });

  it("adding cohort", () => {
    //set up
    const expected = new Cohort("blue");

    //execute
    const result = boolean.addCohort("blue");

    //verify
    expect(expected).toEqual(result);
  });

  it("get list of cohorts", () => {
    //set up
    const expected = [
      new Cohort("Blue"),
      new Cohort("Green"),
      new Cohort("Yellow"),
    ];

    //execute
    boolean.addCohort("Blue");
    boolean.addCohort("Green");
    boolean.addCohort("Yellow");
    const result = boolean.listOfCohort();

    //verify
    expect(result).toEqual(expected);
  });

  it("find cohort by name", () => {
    //set up
    const expected = new Cohort("Green");

    //execute
    boolean.addCohort("Blue");
    boolean.addCohort("Green");
    boolean.addCohort("Yellow");
    const result = boolean.findCohortBy("Green");

    //verify
    expect(result).toEqual(expected);
  });

  it("find cohort by name - not found", () => {
    //set up
    const expected = "Cohort Not Found";

    //execute
    boolean.addCohort("Blue");
    boolean.addCohort("Green");
    boolean.addCohort("Yellow");
    const result = boolean.findCohortBy("Purple");

    //verify
    expect(expected).toEqual(result);
  });
});
