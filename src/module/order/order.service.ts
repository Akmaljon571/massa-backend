import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import Product from 'src/model/product';
import { Types } from 'mongoose';
import User from 'src/model/user';
import Order from 'src/model/order';
import Pro from 'src/model/pro';

@Injectable()
export class OrderService {
  async create(body: CreateOrderDto, _id: Types.ObjectId) {
    const product = await Product.findOne({ _id: body.product });
    const pro = await Pro.findOne({ _id: body.pro_id });
    const user = await User.findOne({ _id });
    const already = await Order.findOne({
      product: product._id,
      pro: pro._id,
      user: user._id,
    });

    if (already) {
      already.count += 1;
      await Order.updateOne({ _id: already._id }, already);
    } else {
      const newOrder = new Order({
        product,
        user,
        pro,
        count: 1,
      });
      await newOrder.save();
      product.order.push(newOrder._id);
      await Product.updateOne({ _id: product._id }, product);
      user.order.push(newOrder._id);
      await User.updateOne({ _id: user._id }, user);
    }

    return {
      message: 'Add Database',
    };
  }

  async findAll(_id: Types.ObjectId) {
    const findUser = await User.findOne({ _id }).populate('order');
    const orders: any = findUser.order;
    const product = [];
    let jami = 0;
    for (let i = 0; i < orders.length; i++) {
      const a: any = await Product.findOne({ _id: orders[i].product }).lean();
      const findPro = await Pro.findOne({ _id: orders[i].pro }).lean();
      a.order = [];
      a.pro = findPro;
      for (let j = 0; j < orders[i].count; j++) {
        a.order.push(orders[i]._id);
        jami += a.price;
      }
      product.push(a);
    }
    return {
      jami,
      data: product,
    };
  }

  async remove(_id: Types.ObjectId) {
    try {
      const findOrder = await Order.findOne({ _id });
      const product = await Product.findOne({ _id: findOrder?.product });
      product.order = product.order.filter((e) => String(e) !== String(_id));
      await Product.updateOne({ _id: product._id }, product);

      const user = await User.findOne({ _id: findOrder.user }).lean();
      user.order = user.order.filter((e) => String(e) !== String(_id));
      await User.updateOne({ _id: user._id }, user);

      await Order.findByIdAndDelete(_id);
      return {
        message: 'Delete Database',
      };
    } catch (error) {
      throw new HttpException('Order Not', HttpStatus.BAD_REQUEST);
    }
  }

  async minus(_id: Types.ObjectId) {
    try {
      const findOrder = await Order.findOne({ _id });
      findOrder.count = findOrder.count - 1;
      await Order.updateOne({ _id }, findOrder);
      return {
        message: 'Delete Database',
      };
    } catch (error) {
      throw new HttpException('Order Not', HttpStatus.BAD_REQUEST);
    }
  }

  async clear(_id: Types.ObjectId) {
    const findUser = await User.findOne({ _id }).populate('order');
    const orders: any = findUser?.order;
    for (let i = 0; i < orders.length; i++) {
      const product = await Product.findOne({ _id: orders[i]?.product });
      product.order = product.order.filter(
        (e) => String(e) !== String(orders[i]._id),
      );
      await Product.updateOne({ _id: product._id }, product);
      await Order.deleteMany({ _id: orders[i] });
    }
    findUser.order = [];
    await User.updateOne({ _id: findUser._id }, findUser);
    return {
      message: 'Clear',
    };
  }
}
