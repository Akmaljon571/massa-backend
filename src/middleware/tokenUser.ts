import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import User from 'src/model/user';
import jwt from 'src/utils/jwt';

@Injectable()
export class TokenUserMiddleWare implements NestMiddleware {
  async use(req: Request, _: Response, next: NextFunction) {
    const { headers }: any = req;

    if (!headers.autharization) {
      throw new HttpException('Bad Request in Token', HttpStatus.BAD_REQUEST);
    }
    const { name, password } = jwt.verify(headers.autharization);

    if (!name || !password) {
      throw new HttpException('Bad Request in Token', HttpStatus.BAD_REQUEST);
    }
    const user = await User.findOne({ name, password });

    if (!user) {
      throw new HttpException('Invalid Token', HttpStatus.BAD_REQUEST);
    }
    req.user_id = user._id;
    next();
  }
}
