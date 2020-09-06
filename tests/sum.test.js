const sum = require('../code/sum.js')
const { add, compileAndroidCode, myBeverages } = sum

describe("1. sum function jest test", () => {
    test('add 1 + 3 to equal 4', () => {
        expect(add(1, 3)).toBe(4)
    })
})

describe('2. simple jest matcher', () => {
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4)
    })

    test('adding positive numbers is not zero', () => {
        for (let a = 1; a <= 10; a++) {
            for (let b = 1; b <= 10; b++) {
                expect(a + b).not.toBe(0)
            }
        }
    })

    test('null jest matcher', () => {
        const nv = null;
        expect(nv).toBeNull();
        expect(nv).toBeDefined();
        expect(nv).not.toBeUndefined();
        expect(nv).not.toBeTruthy();
        expect(nv).toBeFalsy();
    })

    test('zero jest matcher', () => {
        const zv = 0;
        expect(zv).not.toBeNull();
        expect(zv).toBeDefined();
        expect(zv).not.toBeUndefined();
        expect(zv).not.toBeTruthy();
        expect(zv).toBeFalsy();
    })

    test('value jest matcher', () => {
        const value = 3;
        expect(3).not.toBeGreaterThan(3);
        expect(3).toBeGreaterThanOrEqual(3);
        expect(3).toBeLessThan(7);
        expect(3).toBeLessThanOrEqual(4);
        expect(3).toBe(3);
        expect(3).toEqual(3);
    })

    test('float number jest matcher', () => {
        const fvalue = 0.1 + 0.8;
        expect(fvalue).toBeCloseTo(0.9);
    })

    test('string jest matcher', () => {
        expect('team').not.toMatch(/I/);
    })

    test('array jest matcher', () => {
        const shoppingList = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'beer'
        ];

        expect(shoppingList).toContain('beer');
        expect(shoppingList).toHaveLength(5)
        expect(new Set(shoppingList)).toContain('beer')
    })

    test('exception jest matcher', () => {
        expect(compileAndroidCode).toThrow();
        expect(compileAndroidCode).toThrow(Error);
        expect(compileAndroidCode).toThrow('you are using the wrong JDK');
        expect(compileAndroidCode).toThrow(/JDK/);
    })

    test('an object in array jest matcher', () => {
        const myBeverage = { delicious: true, sour: false };
        expect(myBeverages()).toContainEqual(myBeverage);
    })

    test('object jest matcher', () => {
        const houseForSale = {
            bath: true,
            bedrooms: 4,
            kitchen: {
                amenities: [
                    'oven', 'stove', 'washer'
                ],
                area: 20,
                wallColor: 'white'
            }
        }

        const desiredHouse = {
            bath: true,
            kitchen: {
                amenities: [
                    'oven', 'stove', 'washer'
                ],
                wallColor: expect.stringMatching(/white|yellow/)
            }
        }

        expect(houseForSale).toMatchObject(desiredHouse);
        expect(houseForSale).toHaveProperty('bath');
        expect(houseForSale).toHaveProperty('bedrooms', 4);
        expect(houseForSale).not.toHaveProperty('pool');
        expect(houseForSale).toHaveProperty('kitchen.area', 20);
        expect(houseForSale).toHaveProperty('kitchen.amenities', ['oven', 'stove', 'washer']);
        expect(houseForSale).not.toHaveProperty('kitchen.open');
        expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
        expect(houseForSale).toHaveProperty(['kitchen', 'amenities'], ['oven', 'stove', 'washer']);
        expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
        expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);
    })

    {
        pass: false
        message: () => 'message string'
    }

    expect.extend({
        toBeDivisibleBy(received, argument) {
            const pass = received % argument == 0;
            if (pass) {
                return {
                    message: () =>
                        `expected ${received} to be divisible by ${argument}`,
                    pass: true
                }
            } else {
                return {
                    message: () =>
                        `expected ${received} to be divisible by ${argument}`,
                    pass: false
                }
            }
        }
    })

    test('self define jest matcher', () => {
        expect(100).toBeDivisibleBy(2);
        expect(101).not.toBeDivisibleBy(2);
    })

    test('Promise resolves jest matcher', () => {
        return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
    })

    test('Promise async resolves to lemon', async () => {
        await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
        await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
    })
})

describe('drinkAll', () => {
/*     test('drinks something lemon-flavored', () => {
        const drink = jest.fn();
        drinkAll(drink, 'lemon');
        expect(drink).toHaveBeenCalled();
    })

    test('does not drink something ocopus-flavored', () => {
        const drink = jest.fn();
        drinkAll(drink, 'octopus');
        expect(drink).not.toHaveBeenCalled();
    }) */

/*     test('drinkEach drinks each drink',()=>{
        const drink = jest.fn();
        drinkEach(drink, ['lemon', 'octopus']);
        expect(drink).toHaveBeenCalledTimes(2);

    }) */
})