import { Injectable } from '@nestjs/common';
import Category from 'src/model/category';

@Injectable()
export class CategoryService {
  async findAll() {
    return await Category.find();
  }
}
