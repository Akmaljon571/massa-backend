import { Schema, model } from 'mongoose';

export default model(
  'pro',
  new Schema({
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    image: String,
    color: String,
    razmer: String,
  }),
);
