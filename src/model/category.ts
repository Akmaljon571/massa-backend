import { Schema, model } from 'mongoose';

export default model(
  'category',
  new Schema({
    title: String,
    product: [
      {
        type: Schema.Types.ObjectId,
        ref: 'product',
      },
    ],
  }),
);
