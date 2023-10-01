import { CreateLikeDto } from './dto/create-like.dto';
import { Types } from 'mongoose';
export declare class LikeService {
    create({ pro_id }: CreateLikeDto, _id: Types.ObjectId): Promise<{
        message: string;
    }>;
    findAll(_id: Types.ObjectId): Promise<any[]>;
    remove(_id: Types.ObjectId): Promise<{
        message: string;
    }>;
}
