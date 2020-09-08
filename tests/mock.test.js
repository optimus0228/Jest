const forEachs = require("../code/mock.js")

describe("7. mock function jest test", () => {
    test("simple mock function test", () => {
        const mockCallback = jest.fn(x => 42 + x);
        forEachs([0, 1], mockCallback);

        expect(mockCallback.mock.calls.length).toBe(2);

        expect(mockCallback.mock.calls[0][0]).toBe(0);
        expect(mockCallback.mock.results[0].value).toBe(42);

        expect(mockCallback.mock.calls[1][0]).toBe(1);
        expect(mockCallback.mock.results[1].value).toBe(43);
    })

    test("The mock property for mock function test", () => {
        const myMock = jest.fn();

        const a = new myMock();
        a.name = "a mock";

        const b = {};
        b.name = "b mock";
        const bound = myMock.bind(b);
        bound();

        // console.log(myMock.mock.instances);
    })

    test("mock function members test", () => {
        const mockFunction = jest.fn(() => "jest");
        mockFunction.name = "test"

        mockFunction("1 arg", "2 arg");
        expect(mockFunction.mock.calls.length).toBe(1);
        expect(mockFunction.mock.calls[0][0]).toBe("1 arg");
        expect(mockFunction.mock.calls[0][1]).toBe('2 arg');
        expect(mockFunction.mock.results[0].value).toBe("jest")
    })
})