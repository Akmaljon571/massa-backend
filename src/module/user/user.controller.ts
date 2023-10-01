import { Controller, Get, Req, Patch, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-order.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/one')
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  async findOne(@Req() req: Request) {
    const _id = req.user_id;
    return await this.userService.findOne(_id);
  }

  @Patch('/update')
  @ApiHeader({
    name: 'autharization',
    required: true,
  })
  async update(@Req() req: Request, @Body() body: UpdateUserDto) {
    const _id = req.user_id;
    return await this.userService.update(_id, body);
  }
}
