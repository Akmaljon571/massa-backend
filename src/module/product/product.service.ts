import { Injectable } from '@nestjs/common';
import Category from 'src/model/category';
import Product from 'src/model/product';

@Injectable()
export class ProductService {
  async findAll(son: string, page: string) {
    const findPage = (Number(page) - 1) * Number(son);
    const findSon = Number(son) + findPage;
    const all = await Product.find();
    return all.slice(findPage, findSon);
  }

  async findOne(id: string, son: string, page: string) {
    const findPage = (Number(page) - 1) * Number(son);
    const findSon = Number(son) + findPage;
    const category = await Category.findOne({ _id: id }).populate('product');
    const all = category.product;
    return all.slice(findPage, findSon);
  }

  async find(_id: string) {
    return await Product.findOne({ _id }).populate('pro');
  }
}
