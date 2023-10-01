import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import User from 'src/model/user';
import jwt from 'src/utils/jwt';

@Injectable()
export class AuthService {
  async login({ name, password }: LoginAuthDto) {
    const already = await User.findOne({ name, password });
    if (already) {
      return { token: jwt.sign({ name, password }) };
    } else {
      const newUser = new User({
        name,
        password,
      });
      await newUser.save();
      return { token: jwt.sign({ name, password }) };
    }
  }
}
