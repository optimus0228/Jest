const compute = require('../code/compute.js')

describe('3. simple compute function jest test', () => {
    test("add 2 + 2 to equal 4", () => {
        expect(compute.add(2, 2)).toBe(4);
    })

    test("add 2 + 2 to not equal 5", () => {
        expect(compute.add(2, 2)).not.toBe(5);
    })

    test('user should be Brad Traversy object', () => {
        expect(compute.createUser()).toEqual({
            firstName: 'Brad', 
            lastName: 'Traversy'
        })
    })

    test('should be under 1600', () => {
        const load1 = 800;
        const load2 = 700;
        expect(load1 + load2).toBeLessThan(1600)
        expect(load1 + load2).toBeLessThanOrEqual(1600)
    })

    test('C should in Chinese', () => {
        expect("Chinese").toMatch(/c/i)
    })

    test('Admin should be in usernames', () => {
        const usernames = ['John', 'Kaven', 'Admin']
        expect(usernames).toContain('Admin')
    })

    test('User fetched name should be Leanne Graham', () => {
        expect.assertions(1)
        return compute.fetchUser().then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
    })

    test('User fetched name should be Leanne Graham', async () => {
        expect.assertions(1);
        const data = await compute.fetchUser();
        expect(data.name).toEqual('Leanne Graham')
    })  
})