const addStrings = (a, b) => {
    if(typeof(a) !== 'string' || typeof(b) !== 'string') return '';
    return a + b;
}

module.exports.addStrings = addStrings;

const isFailedStringAdd = val => {
    return val === '';
}

module.exports.isFailedStringAdd = isFailedStringAdd;