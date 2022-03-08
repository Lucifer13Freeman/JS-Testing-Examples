const validateValue = require('./validateValue');

test('Value validation', () => expect(validateValue(50)).toBe(true));

describe('validateValue', () => 
{
    test('Correct value', () => expect(validateValue(50)).toBe(true));

    test('Less than correct value', () => expect(validateValue(-1)).toBe(false));
    test('Greater than correct value', () => expect(validateValue(101)).toBe(false));

    test('Lower limit value', () => expect(validateValue(0)).toBe(true));
    test('Upper limit value', () => expect(validateValue(100)).toBe(true));
});