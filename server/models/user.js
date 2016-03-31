import mongoose from 'mongoose';
var passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: 'String' },
  email: { type: 'String' },
  password: { type: 'String' },
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema)
