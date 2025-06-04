const date = new Date();

const findTheOldest = function(people) {
    let result = people.sort((a, b) => ((b.yearOfDeath || date.getFullYear()) - b.yearOfBirth) - ((a.yearOfDeath || date.getFullYear()) - a.yearOfBirth));
    return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;
