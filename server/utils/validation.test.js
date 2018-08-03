const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const nonStringResult = isRealString(121524);
    expect(nonStringResult).toBe(false);
  });
  it('should reject string with only spaces', () => {
    const spaces = isRealString('      ');
    expect(spaces).toBe(false);
  });
  it('should allow string with non-space characters', () => {
    const nonSpaceChars = isRealString('  this#$is(a)test   ');
    expect(nonSpaceChars).toBe(true);
  });
});
