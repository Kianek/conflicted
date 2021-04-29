import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
      minLength: 8,
    },
    roles: [{ type: String, default: 'user' }],
    organization: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
    },
    accountActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
