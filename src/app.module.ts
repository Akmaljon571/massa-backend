import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CategoryModule } from './module/category/category.module';
import { ProductModule } from './module/product/product.module';
import { ProModule } from './module/pro/pro.module';
import { AuthModule } from './module/auth/auth.module';
import { TokenUserMiddleWare } from './middleware/tokenUser';
import { OrderModule } from './module/order/order.module';
import { LikeModule } from './module/like/like.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    CategoryModule,
    ProductModule,
    ProModule,
    AuthModule,
    OrderModule,
    LikeModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenUserMiddleWare)
      .forRoutes({ path: '/user/*', method: RequestMethod.ALL });
  }
}
