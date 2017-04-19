import handleSize from '../../../src/utils';

describe('utils', () => {
  describe('handleSize', () => {
    it('return zero if given value is below zero', () => {
      const value = -45;
      const expected = 0;

      expect(handleSize(value)).toBe(expected);
    });

    it('return one hundred if given value is above one hundreds', () => {
      const value = 4000;
      const expected = 1;

      expect(handleSize(value)).toBe(expected);
    });

    it('return a number with correct comma from given number', () => {
      const value = 45;
      const expected = 0.45;

      expect(handleSize(value)).toBe(expected);
    });
  });
});
