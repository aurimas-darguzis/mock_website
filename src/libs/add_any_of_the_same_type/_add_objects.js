const isObject = require('lodash/isObject');

const addObjects = (a, b) => {
    if(typeof(a) !== 'object' && typeof(b) !== 'object') return {};
    return Object.assign({}, a, b);
}

module.exports.addObjects = addObjects;

const ifFailedObjectAdd = val => {
    return isObject(val) && Object.keys(val).length === 0;
}

module.exports.ifFailedObjectAdd = ifFailedObjectAdd;
