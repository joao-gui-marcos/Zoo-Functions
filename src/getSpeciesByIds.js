const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arr = [];
  ids.forEach((element1) => arr.push(data.species.find(({ id }) => id === element1)));
  return arr;
}

module.exports = getSpeciesByIds;
