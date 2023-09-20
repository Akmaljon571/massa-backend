import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegistAuthDto } from './dto/registr-auth.dto';
import User from 'src/model/user';
import jwt from 'src/utils/jwt';

@Injectable()
export class AuthService {
  async login({ name, password }: LoginAuthDto) {
    const already = await User.findOne({ name, password });
    if (already) {
      return { token: jwt.sign({ name, password }) };
    } else {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async registr({ name, password, gender, age }: RegistAuthDto) {
    const already = await User.findOne({ name, password });
    if (!already) {
      const newUser = new User({
        name,
        password,
        gender,
        age,
      });
      await newUser.save();
      return { token: jwt.sign({ name, password }) };
    } else {
      throw new HttpException('User Already exists', HttpStatus.BAD_REQUEST);
    }
  }
}
