const mapArrToStrings = arr => 
    arr.filter(item => Number.isInteger(item))
        .map(String);

module.exports = mapArrToStrings;