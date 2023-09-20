import { Module } from '@nestjs/common';
import { CategoryModule } from './module/category/category.module';
import { ProductModule } from './module/product/product.module';
import { ProModule } from './module/pro/pro.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [CategoryModule, ProductModule, ProModule, AuthModule],
})
export class AppModule {}
