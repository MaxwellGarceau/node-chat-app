const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  it('should add new User', () => {
    const users = new Users();
    const user = {
      id: 123,
      name: 'Max',
      room: 'The Office Fans'
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
});