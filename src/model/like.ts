import { Schema, model } from 'mongoose';

export default model(
  'like',
  new Schema({
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
