import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiHeader, ApiParam, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Types } from 'mongoose';

@Controller('user/order')
@ApiTags('Order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  async create(@Body() createOrderDto: CreateOrderDto, @Req() req: Request) {
    const _id = req.user_id;
    return await this.orderService.create(createOrderDto, _id);
  }

  @Get()
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  async findAll(@Req() req: Request) {
    const _id = req.user_id;
    return this.orderService.findAll(_id);
  }

  @Delete('/remove/:id')
  @ApiParam({
    type: String,
    name: 'id',
  })
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  async remove(@Param('id') id: Types.ObjectId) {
    return await this.orderService.remove(id);
  }

  @Delete('/minus/:id')
  @ApiParam({
    type: String,
    name: 'id',
  })
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  async minus(@Param('id') id: Types.ObjectId) {
    return await this.orderService.minus(id);
  }

  @Delete()
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  async clear(@Req() req: Request) {
    return await this.orderService.clear(req.user_id);
  }
}
