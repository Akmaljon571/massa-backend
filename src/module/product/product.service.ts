import { Injectable } from '@nestjs/common';
import category from 'src/model/category';
import product from 'src/model/product';

@Injectable()
export class ProductService {
  async findAll(son: string, page: string) {
    // const findCategory = await category.findOne({ title: 'a' });
    // const products = await product.find();
    // const a = new product({
    //   title: products.length + 1 || 1,
    //   price: 10000,
    //   chegirma: '',
    //   oldPrice: 0,
    //   catefory: findCategory._id,
    // });
    // await a.save();
    // findCategory.product.push(a._id);
    // await findCategory.save();
    const filterPage = (Number(page) - 1) * 10;
    const filterSon = Number(son) + filterPage;
    const all = await product.find();
    const sonAll = all.slice(filterPage, filterSon);
    return sonAll;
  }

  async findOne(id: string, son: string, page: string) {
    const filterPage = (Number(page) - 1) * 10;
    const filterSon = Number(son) + filterPage;
    const all = await category.findOne({ _id: id }).populate('product');
    const sonAll = all.product.slice(filterPage, filterSon);
    return sonAll;
  }
}
