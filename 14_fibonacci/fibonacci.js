const fibonacci = function(num) {
    const goldenRatio =  1.618034; 
    num = Number(num);
    if (num < 0) return 'OOPS';
    return Math.floor(((goldenRatio ** num) - (1 - goldenRatio) ** num) / Math.sqrt(5));
};

// Do not edit below this line
module.exports = fibonacci;
