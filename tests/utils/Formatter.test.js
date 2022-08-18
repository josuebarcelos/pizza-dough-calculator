import {toPercentString, toValuePrecisionAndSuffix, toWeightString} from "../../src/utils/Formatter";

describe('Formatter', () => {
    test('value and precision and suffix', () => {
        const value = 1
        const precision = 0
        const suffix = 'banana'
        expect(toValuePrecisionAndSuffix(value, precision, suffix)).toBe('1banana')
    })

    test('percentage string', () => {
        const value = 0.5
        expect(toPercentString(value, 0)).toBe('50%')
    })
    test('weight string', () => {
        const value = 1
        expect(toWeightString(value, 0)).toBe('1g')
    })
})