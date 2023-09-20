import { Module } from '@nestjs/common';
import { CategoryModule } from './module/category/category.module';
import { ProductModule } from './module/product/product.module';
import { ProModule } from './module/pro/pro.module';

@Module({
  imports: [CategoryModule, ProductModule, ProModule],
})
export class AppModule {}
