import { Schema, model } from 'mongoose';

export default model(
  'order',
  new Schema({
    count: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  }),
);
