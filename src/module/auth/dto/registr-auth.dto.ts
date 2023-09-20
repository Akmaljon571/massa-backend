import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  MinLength,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class RegistAuthDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    title: 'name',
    type: String,
    example: 'Akmal',
  })
  name: string;

  @IsString()
  @MinLength(5)
  @MaxLength(8)
  @ApiProperty({
    title: 'password',
    type: String,
    example: '12345678',
  })
  password: string;

  @IsBoolean()
  @ApiProperty({
    title: 'gender',
    type: Boolean,
    example: true,
  })
  gender: boolean;

  @IsNumber()
  @ApiProperty({
    title: 'age',
    type: Number,
    example: 18,
  })
  age: number;
}
