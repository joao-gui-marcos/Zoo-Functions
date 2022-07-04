const data = require('../data/zoo_data');

function isManager(id) {
  const managersArray = [];
  data.employees.forEach((element) => {
    element.managers.forEach((element2) => managersArray.push(element2));
  });
  return managersArray.some((element3) => element3 === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const arr = [];
  data.employees.forEach(({ managers, firstName, lastName }) => {
    managers.forEach((element2) => {
      if (element2 === managerId) {
        arr.push(`${firstName} ${lastName}`);
      }
    });
  });
  return arr;
}

module.exports = { isManager, getRelatedEmployees };
