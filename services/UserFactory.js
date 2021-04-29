const compileModel = require('../functions/mongoose-helpers').compileModel;
const UserSchema = require('../models/UserSchema');

class UserFactory {
  createUser() {
    return compileModel('User', UserSchema);
  }
}

module.exports = UserFactory;
