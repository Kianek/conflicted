import mongoose from 'mongoose';
import MongoMemoryServer from 'mongodb-memory-server-core';

class MongoTestDb {
  constructor() {
    this.connection = mongoose.connection;
    this.mongoServer = new MongoMemoryServer();
  }

  async openConnection() {
    const mongoUri = await this.mongoServer.getUri();
    const opts = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(mongoUri, opts, (err) => {
      if (err) console.error(err);
    });
  }

  async closeConnection() {
    await this.connection.disconnect();
    await this.mongoServer.stop();
  }
}

export default MongoTestDb;
