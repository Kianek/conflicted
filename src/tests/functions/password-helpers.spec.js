const expect = require('chai').expect;
const pw = require('../../functions/password-helpers');
const EmptyPasswordException = require('../../exceptions/EmptyPasswordException');

describe('password-helpers', () => {
  let password = 'supersecret123!';

  describe('hashPassword', () => {
    it('returns a hashed password', async () => {
      let hashedPassword = await pw.hashPassword(password);
      expect(hashedPassword.length).to.be.greaterThan(1);
    });

    it('throws EmptyPasswordException', async () => {
      let exception;
      try {
        await pw.hashPassword('');
      } catch (ex) {
        exception = ex.name;
      }

      expect(exception).to.equal(EmptyPasswordException.name);
    });
  });

  describe('passwordsMatch', () => {
    let passwordHash = '';

    before(async () => {
      passwordHash = await pw.hashPassword(password);
    });

    it('passwords match; returns true', async () => {
      let result = await pw.passwordsMatch(password, passwordHash);
      expect(result).to.be.true;
    });

    it('passwords do not match; returns false', async () => {
      const wrongPassword = 'totallydifferentpassword321!';
      const result = await pw.passwordsMatch(password, wrongPassword);
      expect(result).to.be.false;
    });
  });
});
