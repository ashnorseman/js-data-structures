/**
 * Parse search string to a map
 */

export function parseSearchString(search: string = location.search): { [key: string]: string } {
  if (!search) {
    return {};
  }

  if (search[0] === '?') {
    search = search.slice(1);
  }

  return search.split('&').reduce((result: { [key: string]: string }, part: string) => {
    const splitIndex: number = part.indexOf('=');

    if (splitIndex === -1) {
      return result;
    }

    const key: string = part.slice(0, splitIndex);
    const value: string = part.slice(splitIndex + 1);

    result[key] = value;

    return result;
  }, {});
}
