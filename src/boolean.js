const Cohort = require('./cohorts')
const NAME_TAKEN = 'Name Already Taken'
const COHORT_FOUND = 'Cohort Not Found'

class Boolean {
  constructor () {
    this.listOfCohorts = []
  }

  addCohort (name) {
    const cohort = new Cohort(name)
    for (let i = 0; i < this.listOfCohorts.length; i++) {
      if (this.listOfCohorts[i].name === name) {
        return NAME_TAKEN
      }
    }
    this.listOfCohorts.push(cohort)
    return cohort
  }

  listOfCohort () {
    return this.listOfCohorts
  }

  findCohortBy (name) {
    for (let i = 0; i < this.listOfCohorts.length; i++) {
      if (this.listOfCohorts[i].name === name) {
        return this.listOfCohorts[i]
      }
    }
    return COHORT_FOUND
  }
}

module.exports = Boolean
