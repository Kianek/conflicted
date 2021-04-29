import { expect } from 'chai';
import { hashPassword, passwordsMatch } from '../../functions/password-helpers';
import EmptyPasswordException from '../../exceptions/EmptyPasswordException';

describe('password-helpers', () => {
  let password = 'supersecret123!';

  describe('hashPassword', () => {
    it('returns a hashed password', async () => {
      let hashedPassword = await hashPassword(password);
      expect(hashedPassword.length).to.be.greaterThan(1);
    });

    it('throws EmptyPasswordException', async () => {
      let exception;
      try {
        await hashPassword('');
      } catch (ex) {
        exception = ex.name;
      }

      expect(exception).to.equal(EmptyPasswordException.name);
    });
  });

  describe('passwordsMatch', () => {
    let passwordHash = '';

    before(async () => {
      passwordHash = await hashPassword(password);
    });

    it('passwords match; returns true', async () => {
      let result = await passwordsMatch(password, passwordHash);
      expect(result).to.be.true;
    });

    it('passwords do not match; returns false', async () => {
      const wrongPassword = 'totallydifferentpassword321!';
      const result = await passwordsMatch(password, wrongPassword);
      expect(result).to.be.false;
    });
  });
});
