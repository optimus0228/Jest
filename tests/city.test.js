let cities = [];

function initializeCityDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities.push("Vienna");
            cities.push("Sun Juan");
            resolve();
        }, 100);
    })
}

function clearCityDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities = [];
            resolve();
        }, 100);
    })
}

function isCityInDatabase(name) {
    return cities.includes(name);
}

beforeEach(() => {
    return initializeCityDatabase();
})

afterEach(() => {
    return clearCityDatabase();
})

describe("8. hook function jest test", () => {
    test("City exist in database", () => {
        expect(cities.length).toBe(2);
        expect(isCityInDatabase('Vienna')).toBeTruthy();
        expect(isCityInDatabase('Sun Juan')).toBeTruthy();
    })
})