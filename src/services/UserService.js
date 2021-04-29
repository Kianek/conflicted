import UserRepository from './UserRepository';

class UserService {
  constructor() {
    this.userRepo = UserRepository;
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

export default UserService;
