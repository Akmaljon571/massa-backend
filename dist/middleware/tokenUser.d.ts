import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class TokenUserMiddleWare implements NestMiddleware {
    use(req: Request, _: Response, next: NextFunction): Promise<void>;
}
