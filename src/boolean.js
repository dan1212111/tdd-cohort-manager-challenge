const Cohort = require("./cohorts");

class Boolean {
  constructor() {
    this.listOfCohorts = [];
  }

  addCohort(name) {
    const cohort = new Cohort(name);
    for (let i = 0; i < this.listOfCohorts.length; i++) {
      if (this.listOfCohorts[i].name === name) {
        return "Name Already Taken";
      }
    }
    this.listOfCohorts.push(cohort);
    return cohort;
  }

  listOfCohort() {
    return this.listOfCohorts;
  }

  findCohortBy(name) {
    for (let i = 0; i < this.listOfCohorts.length; i++) {
      if (this.listOfCohorts[i].name === name) {
        return this.listOfCohorts[i];
      }
    }
    return "Cohort Not Found";
  }
}

module.exports = Boolean;
