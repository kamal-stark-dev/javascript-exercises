const findTheOldest = function (people) {
  const currYear = new Date().getFullYear();
  people.sort((p1, p2) => {
    const p1age = (p1.yearOfDeath || currYear) - p1.yearOfBirth;
    const p2age = (p2.yearOfDeath || currYear) - p2.yearOfBirth;
    return p2age - p1age;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
