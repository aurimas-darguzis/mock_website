const factorial = (a) => {
    if (typeof(a) !== 'number') return false;
    if (a < 2) return 1;
   
    return a *  factorial(a - 1);
}

module.exports.factorial = factorial;
