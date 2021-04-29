const expect = require('chai').expect;
const compileModel = require('../../functions/mongoose-helpers').compileModel;
const UserFactory = require('../../services/UserFactory');
const UserSchema = require('../../models/UserSchema');
const User = compileModel('User', UserSchema);

describe('UserFactory', () => {
  it('createUser - instantiates a User model', () => {
    const factory = new UserFactory();
    expect(factory.createUser()).to.be.a(typeof User);
  });
});
