import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProService } from './pro.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('pro')
@ApiTags('Pro')
export class ProController {
  constructor(private readonly proService: ProService) {}

  @Post()
  post() {
    return this.proService.post();
  }

  @Get('id')
  async findOne(@Param('id') id: string) {
    return this.proService.findOne(id);
  }
}
