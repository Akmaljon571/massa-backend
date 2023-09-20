import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiQuery({
    type: String,
    name: 'son',
    example: '10',
  })
  @ApiQuery({
    type: String,
    name: 'page',
    example: '1',
  })
  async findAll(@Query('son') son: string, @Query('page') page: string) {
    return await this.productService.findAll(son || '10', page || '1');
  }

  @Get(':id')
  @ApiQuery({
    type: String,
    name: 'son',
    example: '10',
  })
  @ApiQuery({
    type: String,
    name: 'page',
    example: '1',
  })
  findOne(
    @Param('id') id: string,
    @Query('son') son: string,
    @Query('page') page: string,
  ) {
    return this.productService.findOne(id, son, page);
  }
}
