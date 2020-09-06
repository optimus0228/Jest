const { default: axios } = require("axios");

const compute = {
    add: (num1, num2) => num1 + num2,
    createUser: () => {
        const User = { firstName: 'Brad' }
        User['lastName'] = 'Traversy';

        return User;
    },

    fetchUser: () => 
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.data)
            .catch(err => 'error')
}

module.exports = compute