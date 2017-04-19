import handleSize from '../../../src/utils';

describe('utils', () => {
  describe('handleSize', () => {
    it('return 0 if given value is below 0', () => {
      const value = -45;
      const expected = 0;

      expect(handleSize(value)).toBe(expected);
    });

    it('return 1 if given value is above 100', () => {
      const value = 4000;
      const expected = 1;

      expect(handleSize(value)).toBe(expected);
    });

    it('return a number with correct decimal from given number', () => {
      const value = 45;
      const expected = 0.45;

      expect(handleSize(value)).toBe(expected);
    });
  });
});
