const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((element) => element.id === id);
  const animalID = person.responsibleFor[0];
  const animalObj = data.species.find((element) => element.id === animalID);
  let oldest = {};
  let age = 0;
  animalObj.residents.forEach((element) => {
    if (element.age > age) {
      oldest = element;
      age = element.age;
    }
  });
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
