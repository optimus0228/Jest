const reverseString = require('../code/reversestring')

describe('4. reverse string function jest test', () => {
    test('reversestring should be a function', () => {
        expect(reverseString).toBeDefined()
    })

    test('String reverse', () => {
        expect(reverseString('hello')).toEqual('olleh')
    })

    test('String reverse with upper case', () => {
        expect(reverseString('Hello')).toEqual('olleh')
    })
})