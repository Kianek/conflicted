import ClientFactory from './ClientFactory';

class ClientRepository {
  constructor(userId) {
    this.userId = userId;
    this.clientFactory = ClientFactory;
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

export default ClientRepository;
