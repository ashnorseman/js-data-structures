import { isInteger } from '../integer-validator';

describe('isInteger(value: any): boolean', () => {
  it('validate integers', () => {
    expect(isInteger(2)).toBeTruthy();
    expect(isInteger(0)).toBeTruthy();
    expect(isInteger(-2)).toBeTruthy();
    expect(isInteger('10')).toBeTruthy();

    expect(isInteger(2.5)).toBeFalsy();
    expect(isInteger(0.1)).toBeFalsy();
    expect(isInteger(-2.5)).toBeFalsy();
  });
});
