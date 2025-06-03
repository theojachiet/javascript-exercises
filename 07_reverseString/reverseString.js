const reverseString = function(string) {
    let tempArr = [];
    let arr = string.split('');
    for (let i = arr.length; i >= 0; i--) {
        tempArr.push(arr[i]);
    }
    let result = tempArr.join('');
    return result;
};

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;
