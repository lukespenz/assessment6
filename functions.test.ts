const { shuffleArray } = require('./utils')

describe('shuffleArray should', () => {
    test('is array', () => {
        const arr = [1, 2, 3, 4, 5]
        let answer = shuffleArray(arr)
        expect(Array.isArray(answer)).toBe(true)
    })
    test('array same length', () => {
        const arr = [1, 2, 3, 4, 5]
        let answer = shuffleArray(arr)
        expect(arr.length === answer.length).toBe(true)
    })
});