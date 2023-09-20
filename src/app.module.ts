import { Module } from '@nestjs/common';
import { CategoryModule } from './module/category/category.module';
import { ProductModule } from './module/product/product.module';

@Module({
  imports: [CategoryModule, ProductModule],
})
export class AppModule {}
