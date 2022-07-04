/* eslint-disable max-lines-per-function */
const data = require('../data/zoo_data');

const personObj = {
  id: '',
  fullName: '',
  species: [],
  locations: [],
};

function swapIdForName(arr) {
  const arr2 = [];
  arr.forEach((element) => {
    const animal = data.species.find((element2) => element2.id === element);
    arr2.push(animal.name);
  });
  return arr2;
}

function swapNameForLocations(arr) {
  const locationArr = [];
  arr.forEach((element) => {
    locationArr.push(data.species.find((element2) => element2.name === element).location);
  });
  return locationArr;
}

function setPersonObj(personArray) {
  personObj.id = personArray.id;
  personObj.fullName = `${personArray.firstName} ${personArray.lastName}`;
  personObj.species = swapIdForName(personArray.responsibleFor);
  personObj.locations = swapNameForLocations(personObj.species);
}

function verifyId(obj) {
  if (data.employees.find((element) => element.id === obj.id) === undefined) {
    throw new Error('Informações inválidas');
  }
  setPersonObj(data.employees.find((element2) => element2.id === obj.id));
  return personObj;
}

function createEmployeeArr() {
  const employeeArr = [];
  data.employees.forEach((element) => {
    setPersonObj(element);
    employeeArr.push({ ...personObj });
  });
  return employeeArr;
}

function evaluateObjKey(obj) {
  if (Object.keys(obj).some((element) => element === 'name') && Object.keys(obj).length > 0) {
    return 0;
  }
  if (Object.keys(obj).some((element) => element === 'id' && Object.keys(obj).length > 0)) {
    return 1;
  }
  if (Object.keys(obj).length === 0) {
    return 2;
  }
}

function getEmployeesCoverage(obj = {}) {
  switch (evaluateObjKey(obj)) {
  case 0:
    setPersonObj(data.employees.find((a) => a.firstName === obj.name || a.lastName === obj.name));
    return personObj;
  case 1:
    return verifyId(obj);
  default:
    return createEmployeeArr();
  }
}

module.exports = getEmployeesCoverage;
