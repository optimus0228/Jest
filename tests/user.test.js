import axios from 'axios'
import User from '../code/user.js'

jest.mock('axios');

describe("8. jest mock test", () => {
    test("should fetch users", () => {
        const users = [{name: "Bob"}];
        const res = {data : users};
        // axios.get.mockResolvedValue(res);
        axios.get.mockImplementation(() => Promise.resolve(res))
       
        return User.all().then(data => expect(data).toEqual(users));
    })
})