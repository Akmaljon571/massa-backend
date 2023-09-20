import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
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
  @IsNotEmpty()
  @ApiProperty({
    title: 'password',
    type: String,
    example: '12345678',
  })
  password: string;
}
