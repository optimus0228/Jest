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

        mockFunction("1 arg", "2 arg");
        expect(mockFunction.mock.calls.length).toBe(1);
        expect(mockFunction.mock.calls[0][0]).toBe("1 arg");
        expect(mockFunction.mock.calls[0][1]).toBe('2 arg');
        expect(mockFunction.mock.results[0].value).toBe("jest");

        const mockConstructor = jest.fn();
        const mockInstance = new mockConstructor;
        mockInstance.name = "test";
        expect(mockConstructor.mock.instances.length).toBe(1);
        expect(mockConstructor.mock.instances[0].name).toEqual("test");
    })

    test("mock function return value test", () => {
        const myMock = jest.fn();
        // console.log(myMock());

        myMock
            .mockReturnValue(true)
            .mockReturnValueOnce(10)
            .mockReturnValueOnce("X")
        // console.log(myMock(), myMock(), myMock(), myMock());
    })

    test("mock function continuation-passing style test", () => {
        const filterTestFn = jest.fn();
        filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const results = [11, 12].filter(num => filterTestFn(num));

        expect(filterTestFn.mock.calls.length).toBe(2);
        expect(filterTestFn.mock.calls[0][0]).toBe(11);
        expect(filterTestFn.mock.calls[1][0]).toBe(12);
        console.log(filterTestFn.mock.calls);
    })
})