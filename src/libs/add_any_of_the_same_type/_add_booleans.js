const addBooleans = (a, b) => {
    if (typeof(a) !== 'boolean' || typeof(b) !== 'boolean') return -1;
    return a + b;
}

module.exports.addBooleans = addBooleans;

const isFailedBooleanAdd = value => {
    return value === -1;
}

module.exports.isFailedBooleanAdd = isFailedBooleanAdd;