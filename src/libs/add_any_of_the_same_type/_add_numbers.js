const addNumbers = (a, b) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') return -1;
    return a + b;
}

module.exports.addNumbers = addNumbers;

const isFailedNumberAdd = value => {
    return value === -1;
}

module.exports.isFailedNumberAdd = isFailedNumberAdd;