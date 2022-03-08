const delay = require('./delay');
describe('delay', () => test('Correct value', async () => expect(await delay(() => 2 + 2, 500)).toBe(4)));