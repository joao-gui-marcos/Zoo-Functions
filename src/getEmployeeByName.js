const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  // seu código aqui
  if (name == null) {
    return {};
  }
  return data.employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
}

module.exports = getEmployeeByName;
