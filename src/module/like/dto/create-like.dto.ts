import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateLikeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    title: 'pro_id',
    type: Types.ObjectId,
    example: '650b0a0a7eef3d900cd9ffed',
  })
  pro_id: Types.ObjectId;
}
