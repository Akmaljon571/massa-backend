import { Schema, model } from 'mongoose';

export default model(
  'order',
  new Schema({
    count: Number,
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  }),
);
