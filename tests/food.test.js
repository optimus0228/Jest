let cities = [];
let foods = [];

function initializeCityDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cities.push("Vienna");
            cities.push("San Juan");
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
    // return cities.map(city => city.names).includes(name);
    return cities.includes(name);
}

function initializeFoodDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            foods.push("Wiener Schnitzel");
            foods.push("Mofongo");
            resolve();
        }, 100);
    })
}

function clearFoodDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            foods = [];
            resolve();
        }, 100);
    })
}

function findNameIndex(name) {
    let index = -1;
    for (index = 0; index < cities.length; index++) {
        if (cities[index].toString() == name.toString()) {
            break;
        }
    }

    return index;
}

function isValidCityFoodPair(name, food) {
    let index = findNameIndex(name);

    return foods[index] == food;
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

    afterEach(() => {
        return clearFoodDatabase();
    })

    test.only("Vienna <3 sausage", () => {
        expect(foods.length).toBe(2);
        expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
        expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
    })
})