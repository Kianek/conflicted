const ClientFactory = require('./ClientFactory');

class ClientRepository {
  constructor(userId, clientFactory) {
    this.userId = userId;
    this.clientFactory = clientFactory;
  }

  findById(id) {
    return null;
  }

  findAll() {
    return null;
  }

  add(newClient) {
    return null;
  }

  update(id, updateInfo) {
    return null;
  }

  remove(id) {
    return null;
  }
}
