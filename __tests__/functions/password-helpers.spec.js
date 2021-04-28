const pw = require('../../functions/password-helpers');
const EmptyPasswordException = require('../../exceptions/EmptyPasswordException');

describe('password-helpers', () => {
  let password = 'supersecret123!';

  describe('hashPassword', () => {
    test('returns a hashed password', async () => {
      let hashedPassword = await pw.hashPassword(password);
      expect(hashedPassword.length).toBeGreaterThan(1);
    });

    test('throws EmptyPasswordException', async () => {
      let exception;
      try {
        await pw.hashPassword('');
      } catch (ex) {
        exception = ex.name;
      }

      expect(exception).toBe(EmptyPasswordException.name);
    });
  });

  describe('passwordsMatch', () => {
    let passwordHash = '';

    beforeAll(async () => {
      passwordHash = await pw.hashPassword(password);
    });

    test('passwords match; returns true', async () => {
      let result = await pw.passwordsMatch(password, passwordHash);
      expect(result).toBeTruthy();
    });

    test('passwords do not match; returns false', async () => {
      const wrongPassword = 'totallydifferentpassword321!';
      const result = await pw.passwordsMatch(password, wrongPassword);
      expect(result).toBeFalsy();
    });
  });
});
