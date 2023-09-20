import { Schema, model } from 'mongoose';

export default model(
  'like',
  new Schema({
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
