/**
 * Check if the value is in valid email format
 */

export function isValidEmail(value: any): boolean {
  if (!value) {
    return false;
  }

  value = value.toString();

  const reg: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reg.test(value);
}
