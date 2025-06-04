const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789';

const palindromes = function (str) {
    
    str = transformLetters(str);
    let reverse = str.split('').reverse().join('');
    if (str === reverse) return true;
    else return false;
};

function transformLetters(str) {
    let parts = str.split('');
    let alphaParts = [];
    for (char of parts) {
        if (alphanumeric.includes(char)) {
            alphaParts.push(char);
        }
    }
    str = alphaParts.join('');
    return str = str.toLowerCase();
}

console.log(palindromes('sdfdsfsdffggfd'));

// Do not edit below this line
module.exports = palindromes;
