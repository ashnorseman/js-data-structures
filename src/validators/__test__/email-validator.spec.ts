import { isValidEmail } from '../email-validator';

describe('isValidEmail(value: any): boolean', () => {
  it('validate email addresses', () => {
    expect(isValidEmail('ash.norseman@gmail.com')).toBeTruthy();
    expect(isValidEmail('ash@a.b.com')).toBeTruthy();

    expect(isValidEmail('ash@ash')).toBeFalsy();
    expect(isValidEmail('')).toBeFalsy();
  });
});
