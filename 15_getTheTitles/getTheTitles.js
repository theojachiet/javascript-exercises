const getTheTitles = function(arr) {
    let result = [];
    result = arr.map(({title, author}) => title);
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
