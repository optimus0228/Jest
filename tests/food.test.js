let cities = [];

function initializeCityDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities.push({name:"Vienna"});
            cities.push({name:"Sun Juan"});
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
    return cities.map(city => city.name).includes(name);
}

function initializeFoodDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities[0].foods = ["Wiener Schnitzel"];
            cities[1].foods = ["Mofongo"];
            resolve();
        }, 100);
    })
}

function isValidCityFoodPair(name, food) {
    return cities[cities => cities.indexOf(name)].foods == food;
}

beforeEach(() => {
    return initializeCityDatabase();
})

afterEach(() => {
    return clearCityDatabase();
})

describe("9. hook priority jest test", () => {
    test("city exist test", () => {
        expect(cities.length).toBe(2);
        expect(isCityInDatabase("Vienna")).toBeTruthy();
        expect(isCityInDatabase("Sun Juan")).toBeTruthy();
    })
})

describe("10. matching cities to foods", () => {
    beforeEach(() => {
        return initializeFoodDatabase();
    })

    test("Vienna <3 sausage", () => {
        expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
        expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
    })
})