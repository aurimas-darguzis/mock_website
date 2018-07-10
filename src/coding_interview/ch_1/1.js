// Implement an algorithm to determine if a string has all unique characters.
// What if you can not use additional data structure?

const hasUniqueCharacters = (val) => {
    const obj = {};
    val.split('').forEach((v, i) => {
        const ch = v[i];
        if (obj[ch]) return false; else obj[ch] = true;
    })
    return true;
}

module.exports.hasUniqueCharacters = hasUniqueCharacters;