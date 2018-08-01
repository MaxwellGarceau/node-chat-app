const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const fromVar = 'Max';
    const textVar = 'This is a test';

    const generateMessageResults = generateMessage(fromVar, textVar);

    expect(generateMessageResults.createdAt).toBeA('number');
    expect(generateMessageResults.from).toBe(fromVar);
    expect(generateMessageResults.text).toBe(textVar);
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const fromVar = 'Max';
    const latitude = 10;
    const longitude = 37;

    const generateLocationMessageResults = generateLocationMessage(fromVar, latitude, longitude);

    expect(generateLocationMessageResults.from).toBe(fromVar);
    expect(generateLocationMessageResults.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(generateLocationMessageResults.createdAt).toBeA('number');
  });
});