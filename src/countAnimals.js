const data = require('../data/zoo_data');

function countAnimals(animal = {}) {
  let arr = [];
  const obj = {};
  switch (Object.keys(animal).length) {
  case 2:
    arr = data.species.find(({ name }) => name === animal.specie).residents;
    return arr.filter(({ sex }) => sex === animal.sex).length;
  case 1:
    return data.species.find(({ name }) => name === animal.specie).residents.length;
  default:
    data.species.forEach(({ name, residents }) => {
      obj[name] = residents.length;
    });
    return obj;
  }
}

module.exports = countAnimals;

console.log(countAnimals());
