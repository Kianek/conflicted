const UserRepository = require('./UserRepository');

class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  register(newUser) {
    return null;
  }

  updateUserInfo(id, updateInfo) {
    return null;
  }

  deleteAccount(id) {
    return null;
  }
}
