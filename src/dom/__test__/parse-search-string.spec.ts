import { parseSearchString } from '../parse-search-string';

describe('parseQueryParams', () => {
  it('transform location.search', () => {
    const result1 = parseSearchString('?a=1&b=2');

    expect(result1.a).toEqual('1');
    expect(result1.b).toEqual('2');

    const result2 = parseSearchString('?a=1&b=2=3');

    expect(result2.a).toEqual('1');
    expect(result2.b).toEqual('2=3');
  });

  it('string can start with or without `?`', () => {
    expect(parseSearchString('a=1').a).toEqual('1');
    expect(parseSearchString('?a=1').a).toEqual('1');
  });

  it('mal formatted string', () => {
    expect(parseSearchString('')).toEqual({});
    expect(parseSearchString('?a')).toEqual({});
  });
});
