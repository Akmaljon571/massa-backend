import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  Delete,
} from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { Request } from 'express';
import { Types } from 'mongoose';
import { ApiHeader, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('user/like')
@ApiTags('Like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  create(@Body() createLikeDto: CreateLikeDto, @Req() req: Request) {
    const _id = req.user_id;
    return this.likeService.create(createLikeDto, _id);
  }

  @Get()
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  async findAll(@Req() req: Request) {
    const _id = req.user_id;
    return this.likeService.findAll(_id);
  }

  @Delete(':id')
  @ApiParam({
    type: String,
    name: 'id',
  })
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  async remove(@Param('id') id: Types.ObjectId) {
    return await this.likeService.remove(id);
  }
}
