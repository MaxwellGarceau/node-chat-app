// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age}.`;
//   }
// }

// const me = new Person('Max', 26);
// const description = me.getUserDescription();
// console.log(description);

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    const removedUser = this.getUser(id);

    if (removedUser) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return removedUser;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList (room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {
  Users
};
