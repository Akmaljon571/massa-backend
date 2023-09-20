import { Injectable } from '@nestjs/common';
import { cloudinary } from '../../utils/cloudinary';
import product from 'src/model/product';

@Injectable()
export class ProService {
  async post() {
    const img =
      'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp';
    const uploadResponse = await cloudinary.uploader.upload(img, {
      upload_preset: 'Akmal',
    });
    console.log(uploadResponse?.secure_url);
  }

  async findOne(id: string) {
    return await product.findOne({ _id: id }).populate('pro');
  }
}
