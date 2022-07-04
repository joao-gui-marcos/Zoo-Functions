const data = require('../data/zoo_data');

function createAnimalArray(animal, sex, sort = false) {
  const { residents } = data.species.find((element) => element.name === animal);
  if (sex != null) {
    const animalArr = residents.filter((elem) => elem.sex === sex).map((element) => element.name);
    return sort ? animalArr.sort() : animalArr;
  }
  const animalArr2 = residents.map((element) => element.name);
  return sort ? animalArr2.sort() : animalArr2;
}

function createAnimalObj(animal, sex, sort) {
  return {
    [animal]: createAnimalArray(animal, sex, sort),
  };
}

function createRegionArray(location, sex, sort) {
  const regionArr = [];
  data.species.forEach((element) => {
    if (element.location === location) {
      regionArr.push(createAnimalObj(element.name, sex, sort));
    }
  });
  return regionArr;
}

function createRegionArrayWithoutNames(location) {
  const regionArr = [];
  data.species.forEach((element) => {
    if (element.location === location) {
      regionArr.push(element.name);
    }
  });
  return regionArr;
}

function createMapObjWithoutNames() {
  return {
    NE: createRegionArrayWithoutNames('NE'),
    NW: createRegionArrayWithoutNames('NW'),
    SE: createRegionArrayWithoutNames('SE'),
    SW: createRegionArrayWithoutNames('SW'),
  };
}

function createMapObj(sex, sort) {
  return {
    NE: createRegionArray('NE', sex, sort),
    NW: createRegionArray('NW', sex, sort),
    SE: createRegionArray('SE', sex, sort),
    SW: createRegionArray('SW', sex, sort),
  };
}

function evaluateParameter(obj) {
  const includeNames = Object.keys(obj).some((element) => element === 'includeNames').toString();
  const sex = Object.keys(obj).some((element) => element === 'sex').toString();
  const sorted = Object.keys(obj).some((element) => element === 'sorted').toString();
  return includeNames + sex + sorted;
}

function determineSexDefault(obj) {
  if (Object.values(obj).some((element) => element === 'female')) {
    return createMapObj('female', true);
  }
  return createMapObj('male', true);
}

function determineSexCase3(obj) {
  if (Object.values(obj).some((element) => element === 'female')) {
    return createMapObj('female');
  }
  return createMapObj('male');
}

function returnWithNames(obj) {
  switch (evaluateParameter(obj)) {
  case 'truefalsefalse':
    return createMapObj(); // caso getAnimalMap({ includeNames: true })
  case 'truefalsetrue':
    return createMapObj(null, true);
  case 'truetruefalse':
    return determineSexCase3(obj);
  default:
    return determineSexDefault(obj);
  }
}

function getAnimalMap(options = {}) {
  if (Object.keys(options).some((element) => element === 'includeNames')) {
    return returnWithNames(options);
  }
  return createMapObjWithoutNames();
}

module.exports = getAnimalMap;
