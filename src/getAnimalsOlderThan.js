const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find(({ name }) => name === animal).residents.every((ele) => ele.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
