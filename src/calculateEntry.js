const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {
    adult: 0,
    senior: 0,
    child: 0,
  };
  entrants.forEach(({ age }) => {
    if (age < 18) {
      obj.child += 1;
    }
    if (age >= 18 && age < 50) {
      obj.adult += 1;
    }
    if (age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants = []) {
  if (!Array.isArray(entrants)) {
    return 0;
  }
  const arr1 = Object.values(countEntrants(entrants));
  const arr2 = Object.values(data.prices);
  return arr1.reduce((r, a, i) => r + a * arr2[i], 0);
}

module.exports = { calculateEntry, countEntrants };
