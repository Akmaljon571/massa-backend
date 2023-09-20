import { Schema, model } from 'mongoose';

export default model(
  'user',
  new Schema({
    name: String,
    password: String,
    gender: Boolean,
    age: Number,
    order: [
      {
        type: Schema.Types.ObjectId,
        ref: 'order',
      },
    ],
    like: [
      {
        type: Schema.Types.ObjectId,
        ref: 'like',
      },
    ],
  }),
);
