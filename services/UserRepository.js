const UserFactory = require('./UserFactory');

class UserRepository {
  constructor(userFactory) {
    this.userFactory = userFactory;
  }

  findById(id) {
    return null;
  }

  add(user) {
    return null;
  }

  update(user) {
    return null;
  }

  remove(id) {
    return null;
  }
}

module.exports = UserRepository;
