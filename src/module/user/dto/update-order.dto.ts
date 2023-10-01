import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  MinLength,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    title: 'name',
    type: String,
    example: 'Akmal',
  })
  name: string;

  @IsString()
  @MinLength(5)
  @MaxLength(8)
  @IsOptional()
  @ApiProperty({
    title: 'password',
    type: String,
    example: '12345678',
  })
  password: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    title: 'gender',
    type: Boolean,
    example: true,
  })
  gender: boolean;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    title: 'age',
    type: Number,
    example: 18,
  })
  age: number;
}
