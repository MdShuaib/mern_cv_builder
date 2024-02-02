import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      require: true
    },
    username: {
      type: String,
      unique: true,
      require: true
    },
    number: {
      type: String
    },
    password: {
      type: String,
      select: false
    },
    is_active: {
      type: Boolean,
      default: false
    },
    download: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const userModel = model('user', userSchema);
export default userModel;
