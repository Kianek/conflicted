const compileModel = require('../functions/mongoose-helpers').compileModel;
const ClientSchema = require('../models/ClientSchema');

class ClientFactory {
  createClient() {
    return compileModel('Client', ClientSchema);
  }
}

module.exports = ClientFactory;
