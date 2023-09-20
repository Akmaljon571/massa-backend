import { Schema, model } from 'mongoose';

export default model(
  'pro',
  new Schema({
    image: String,
    color: String,
    razmer: Number,
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  }),
);
