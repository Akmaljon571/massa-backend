import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Types } from 'mongoose';
import User from 'src/model/user';
import { UpdateUserDto } from './dto/update-order.dto';
import jwt from 'src/utils/jwt';

@Injectable()
export class UserService {
  async findOne(_id: Types.ObjectId) {
    return await User.findOne({ _id });
  }

  async update(
    _id: Types.ObjectId,
    { name, password, gender, age }: UpdateUserDto,
  ) {
    const findOne = await this.findOne(_id);

    if (name && !password) {
      const allReady = await User.findOne({ name, password: findOne.password });
      if (allReady) {
        throw new HttpException('Name Already exists', HttpStatus.BAD_REQUEST);
      }
    } else if (!name && password) {
      const allReady = await User.findOne({ name: findOne.name, password });
      if (allReady) {
        throw new HttpException('Already exists', HttpStatus.BAD_REQUEST);
      }
    } else if (name && password) {
      const allReady = await User.findOne({ name, password });
      if (allReady) {
        throw new HttpException('User Already exists', HttpStatus.BAD_REQUEST);
      }
    }
    findOne.name = name || findOne.name;
    findOne.password = password || findOne.password;
    findOne.gender = gender ? true : false;
    findOne.age = age || findOne.age;
    await User.findByIdAndUpdate(findOne._id, findOne);
    const newUser = await this.findOne(_id);
    return {
      token: jwt.sign({ name: newUser.name, password: newUser.password }),
    };
  }
}
