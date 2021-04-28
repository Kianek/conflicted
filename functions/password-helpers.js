const bcrypt = require('bcrypt');
const isEmpty = require('validator/lib/isEmpty');
const EmptyPasswordException = require('../exceptions/EmptyPasswordException');

const hashPassword = async (password) => {
  if (isEmpty(password)) {
    throw new EmptyPasswordException();
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return await bcrypt.hash(password, salt);
};

const passwordsMatch = async (password, passwordHash) => {
  return await bcrypt.compare(password, passwordHash);
};

module.exports = {
  hashPassword,
  passwordsMatch,
};
