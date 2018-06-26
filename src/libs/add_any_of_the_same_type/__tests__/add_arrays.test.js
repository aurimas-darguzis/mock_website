const add = require('../_add_arrays');

describe('Add test', () => {
  it('has a module', () => {
    expect(add).toBeDefined();
  });

  describe('add', () => {
    it('adds two arrays', () => {
      const expected = [1, 2];
      const actual = add.addArrays([1], [2]);
      expect(actual).toEqual(expected);
    });

    it('returns [] for a boolean to the array', () => {
      const expected = [];
      const actual = add.addArrays([], {});
      expect(actual).toEqual(expected);
    })

  });
});
