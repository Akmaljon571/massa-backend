import { Injectable } from '@nestjs/common';
import { cloudinary } from '../../utils/cloudinary';
import Pro from 'src/model/pro';
import Product from 'src/model/product';

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

  async findOne(_id: string) {
    // const image =
    //   'https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
    // const color = ['black', 'white', 'blue', 'green', 'pink', 'gray'];
    // const product = await Product.findById({ _id });
    // console.log(product);
    // const newpro = new Pro({
    //   product: product._id,
    //   image,
    //   color: color[Math.floor((Math.random() * 6) / 1)],
    //   razmer: Math.floor((Math.random() * 100) / 1),
    // });
    // await newpro.save();
    // product.pro.push(newpro._id);
    // await product.save();
    const a = await Product.findOne({ _id });
    const oldPro = a.pro;
    const newPro = [];
    for (let i = 0; i < oldPro.length; i++) {
      const b = await Pro.findOne({ _id: oldPro[i] });
      newPro.push(b);
    }
    delete a.pro;
    a.pro = newPro;
    return a;
  }
}
