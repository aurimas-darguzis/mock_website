const add = require('../_add_objects');

describe('Add Objects test', () => {
    it('has a module', () => {
        expect(add).toBeDefined();
    });
});

describe('add', () => {
    it('adds two Objects', () => {
        const expected = { foo: 1, bar: 1 };
        const actual = add.addObjects({ foo: 1 }, { bar: 1 });
        expect(actual).toEqual(expected);
    });

    it('returns {} when passing object and boolean', () => {
        const expected = {};
        const actual = add.addObjects({}, true);
        expect(actual).toEqual(expected);
    });

    it('returns {} when passing object and array', () => {
        const expected = {};
        const actual = add.addObjects({}, []);
        expect(actual).toEqual(expected);
    });

    it('returns {} when passing an object and the number', () => {
        const expected = {};
        const actual = add.addObjects({}, 1);
        expect(actual).toEqual(expected);
    });

    it('returns {} when passing null and undefined', () => {
        const expected = {};
        const actual = add.addObjects(null, undefined);
        expect(actual).toEqual(expected);
    });
});

describe('isFailedNumberAdd', () => {
    it('returns true if empty object', () => {
        const expeceted = true;
        const actual = add.ifFailedObjectAdd({});
        expect(actual).toEqual(expeceted);
    });

    it('returns false if passing no value', () => {
        const expeceted = false;
        const actual = add.ifFailedObjectAdd();
        expect(actual).toEqual(expeceted);
    });
});
