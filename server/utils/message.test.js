const expect = require('expect');

const { generateMessage } = require('./message');

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