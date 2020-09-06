const isAnagram = require('../code/anagram.js')

describe('6. isAnagram function jest test', () => {
    test('isAnagram function exists', () => {
        expect(isAnagram).toBeDefined()
    })

    test('isAnagram is a function', () => {
        expect(typeof isAnagram).toEqual('function')
    })

    test('"cinema" is an anagram of "iceman"', () => {
        expect(isAnagram("cinema", "iceman")).toBeTruthy()
    })

    test('"Dormitory" is an anagram of "dirty room##', () => {
        expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy()
    })

    test('"Hello" is not an anagram of "Aloha"', () => {
        expect(isAnagram("Hello", "Aloha")).not.toBeTruthy()
    })

    test('"TCP/IP" is not an anagram of "PI/CTPS"', () => {
        expect(isAnagram("TCP/IP", "PI/CTPS")).toBeFalsy()
    })
})