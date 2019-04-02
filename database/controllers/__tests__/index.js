const userController = require('../userController');

const req = {
    body: {
        first: 'Foo',
        last: 'bar',
        username: 'baz'
    }
};

const res = {
    status: (val) => ({
        send: (data) => {
            return data;
        }
    }),
};

describe("userController",  () => {
    test('creates a user and returns it', () => {
        return userController.create(req, res).then(data => {
            expect(data.first).toBe('Foo');
            expect(data.last).toBe('bar');
            expect(data.username).toBe('baz');
        })
    });
})