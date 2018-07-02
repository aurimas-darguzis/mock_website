const addBooleans = (a, b) => {
    if (typeof(a) !== 'boolean' || typeof(b) !== 'boolean') return -1;
    return a + b;
}

module.exports.addBooleans = addBooleans;

const isFailedBooleanAdd = (value) => {
    if (value !== -1) return false;
    return true;
}

module.exports.isFailedBooleanAdd = isFailedBooleanAdd;