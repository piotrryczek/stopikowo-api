import mongoose from 'mongoose';

// Importing models
// ...

const connectionUrl = process.env.MONGO_CONNECTION;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
