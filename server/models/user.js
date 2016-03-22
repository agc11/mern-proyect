import mongoose from 'mongoose';
import cuid from 'cuid';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default moongose.model('User', UserSchema)
