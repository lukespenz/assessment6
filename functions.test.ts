const { shuffleArray } = require('./utils')

let testArr = [1, 2, 3, 4, 5]

describe('shuffleArray should', () => {

    test('is array', () => {
        let answer = shuffleArray(testArr)
        expect(Array.isArray(answer)).toBe(true)
    })

    test('array same length', () => {
        let answer = shuffleArray(testArr)
        expect(testArr.length).toEqual(answer.length)
    })

    test('check all original items are in the shuffled array', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })

    test('check all items have been shuffled', () => {
        let result = shuffleArray(testArr)
        expect(result.join()).not.toEqual(testArr.join())
    })
});