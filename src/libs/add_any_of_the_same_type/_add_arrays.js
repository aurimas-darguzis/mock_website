const addArrays = (a, b) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b);
  } else {
    return [];
  }
}

module.exports.addArrays = addArrays;