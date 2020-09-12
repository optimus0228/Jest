let cities = [];

function initializeCityDatabase() {
    cities.push("Vienna");
    cities.push("Sun Juan")
}

function clearCityDatabase() {
    cities = [];
}

function isCityInDatabase(name) {
    return cities.includes(name);
}

beforeAll(() => {
    initializeCityDatabase();
})

afterAll(() => {
    clearCityDatabase();
})

describe("8. hook function jest test", () => {
    test("City exist in database", () => {
        expect((cities.length)).toBe(2);
        expect(isCityInDatabase('Vienna')).toBeTruthy();
        expect(isCityInDatabase('Sun Juan')).toBeTruthy();
    })
})