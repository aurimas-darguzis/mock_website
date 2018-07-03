const recursion = require('../recursion');

describe('factorial', () => {
    it('should be defined', () => {
        expect(recursion).toBeDefined();
    });

    it('should do the factorial(1)', () => {
        const expected = 1;
        const actual = recursion.factorial(1);
        expect(actual).toEqual(expected);        
    });

    it('should do the factorial(2)', () => {
        const expected = 2;
        const actual = recursion.factorial(2);
        expect(actual).toEqual(expected);        
    });

    it('should do the factorial(3)', () => {
        const expected = 6;
        const actual = recursion.factorial(3);
        expect(actual).toEqual(expected);        
    });

    it('should do the factorial(10)', () => {
        const expected = 3628800;
        const actual = recursion.factorial(10);
        expect(actual).toEqual(expected);        
    });
});
