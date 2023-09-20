import { Injectable } from '@nestjs/common';
import category from 'src/model/category';

@Injectable()
export class CategoryService {
  async findAll() {
    return await category.find();
  }
}
