import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { Types } from 'mongoose';
import User from 'src/model/user';
import Product from 'src/model/product';
import Like from 'src/model/like';

@Injectable()
export class LikeService {
  async create({ pro_id }: CreateLikeDto, _id: Types.ObjectId) {
    const product = await Product.findOne({ _id: pro_id });
    const user = await User.findOne({ _id });
    const newLike = new Like({
      product,
      user,
    });
    await newLike.save();
    product.like.push(newLike._id);
    await Product.updateOne({ _id: product._id }, product);
    user.like.push(newLike._id);
    await User.updateOne({ _id: user._id }, user);
    return {
      message: 'Add Database',
    };
  }

  async findAll(_id: Types.ObjectId) {
    const findUser = await User.findOne({ _id }).populate('like');
    const likes: any = findUser.like;
    const product = [];
    for (let i = 0; i < likes.length; i++) {
      const a: any = await Product.findOne({ _id: likes[i].product }).lean();
      delete a.like;
      a.like_id = likes[i]._id;
      product.push(a);
    }
    return product;
  }

  async remove(_id: Types.ObjectId) {
    try {
      const findLike = await Like.findOne({ _id });
      const product = await Product.findOne({ _id: findLike?.product });
      product.like = product.like.filter((e) => String(e) !== String(_id));
      await Product.updateOne({ _id: product._id }, product);

      const user = await User.findOne({ _id: findLike.user }).lean();
      user.like = user.like.filter((e) => String(e) !== String(_id));
      await User.updateOne({ _id: user._id }, user);

      await Like.findByIdAndDelete(_id);
      return {
        message: 'Delete Database',
      };
    } catch (error) {
      throw new HttpException('Like Not', HttpStatus.BAD_REQUEST);
    }
  }
}
