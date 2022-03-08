const mapArrToStrings = require('./mapIntArrToStrings');

describe('mapIntArrToStrings', () => 
{
    test('Correct value', () => expect(mapArrToStrings([1, 2 ,3])).toEqual(['1', '2', '3']));
    test('Mishmash', () => expect(mapArrToStrings([1, 2, 3, null, undefined, 'blabla'])).toEqual(['1', '2', '3']));
    test('Empty array', () => expect(mapArrToStrings([])).toEqual([]));
    test('Negation', () => expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]));
});