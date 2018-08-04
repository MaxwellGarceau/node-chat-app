const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Pedro',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Juanita',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Jorge',
      room: 'Node Course'
    }];
  });

  it('should add new User', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Max',
      room: 'The Office Fans'
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userThatShouldBeRemoved = users.users[0];
    const removedUser = users.removeUser('1');

    expect(removedUser).toBe(userThatShouldBeRemoved);
  });

  it('should not remove user', () => {
    const idDoesNotExist = '182957128957091539';
    const userShouldNotBeRemoved = users.removeUser(idDoesNotExist);

    expect(userShouldNotBeRemoved).toBe(undefined);
  });

  it('should find user', () => {
    const theUser = users.getUser('2');

    expect(theUser).toBe(users.users[1]);
  });

  it('should not find user', () => {
    const idDoesNotExist = '18394395871985';
    const userDoesNotExist = users.getUser(idDoesNotExist);

    expect(userDoesNotExist).toBe(undefined);
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Pedro', 'Jorge']);
  });

  it('should return names for react course', () => {
    const userList = users.getUserList('React Course');

    expect(userList).toEqual(['Juanita']);
  });
});