const data = require('../data/zoo_data');

function getAnimals(day) {
  const dailyAnimals = [];
  data.species.forEach((element) => {
    if (element.availability.some((element2) => element2 === day)) {
      dailyAnimals.push(element.name);
    }
  });
  return dailyAnimals;
}

const obj = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: getAnimals('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: getAnimals('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: getAnimals('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: getAnimals('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: getAnimals('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: getAnimals('Sunday'),
  },
};

function isAnimal(string) {
  if (data.species.some((element) => element.name === string)) {
    return data.species.find(({ name }) => name === string).availability;
  }
  return null;
}

function isMonday(string) {
  const aux = { ...obj };
  if (string === 'Monday') {
    Object.keys(aux).forEach((element) => {
      if (element !== 'Monday') {
        delete aux[element];
      }
    });
    return aux;
  }
  return null;
}

function findObj(string) {
  const aux = { ...obj };
  Object.keys(aux).forEach((element) => {
    if (element !== string) {
      delete aux[element];
    }
  });
  return aux;
}

function getSchedule(scheduleTarget) {
  if (isAnimal(scheduleTarget) != null) {
    return isAnimal(scheduleTarget);
  }
  if (isMonday(scheduleTarget) != null) {
    return isMonday(scheduleTarget);
  }
  const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (weekDays.some((element) => element === scheduleTarget)) {
    return findObj(scheduleTarget);
  }
  return obj;
}

module.exports = getSchedule;
