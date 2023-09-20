import { Schema, model } from 'mongoose';

export default model(
  'product',
  new Schema({
    title: String,
    price: Number,
    chegirma: String,
    oldPrice: Number,
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
    order: [
      {
        type: Schema.Types.ObjectId,
        ref: 'order',
      },
    ],
    pro: [
      {
        type: Schema.Types.ObjectId,
        ref: 'pro',
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
