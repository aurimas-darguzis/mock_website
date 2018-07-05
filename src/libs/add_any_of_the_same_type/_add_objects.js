const addObjects = (a, b) => {
    if(typeof(a) !== 'object' && typeof(b) !== 'object') return {};
    return Object.assign({}, a, b);
}

module.exports.addObjects = addObjects;