import mongoose from 'mongoose';

function initializeMongoose(connectionUri) {
  mongoose.connect(connectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', (err) => console.error(`Connection error: ${err}`));
  db.once('open', () => console.log(`MongoDB connected`));
}

export default initializeMongoose;
