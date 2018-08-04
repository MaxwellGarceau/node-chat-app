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
  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
}

module.exports = {
  Users
};
