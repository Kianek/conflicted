const expect = require('chai').expect;
const compileModel = require('../../functions/mongoose-helpers').compileModel;
const ClientFactory = require('../../services/ClientFactory');
const ClientSchema = require('../../models/ClientSchema');
const Client = compileModel('Client', ClientSchema);

describe('ClientFactory', () => {
  it('#createClient instantiates a Client model', () => {
    const factory = new ClientFactory();
    expect(factory.createClient()).to.be.a(typeof Client);
  });
});
