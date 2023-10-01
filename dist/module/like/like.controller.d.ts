import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { Request } from 'express';
import { Types } from 'mongoose';
export declare class LikeController {
    private readonly likeService;
    constructor(likeService: LikeService);
    create(createLikeDto: CreateLikeDto, req: Request): Promise<{
        message: string;
    }>;
    findAll(req: Request): Promise<any[]>;
    remove(id: Types.ObjectId): Promise<{
        message: string;
    }>;
}
