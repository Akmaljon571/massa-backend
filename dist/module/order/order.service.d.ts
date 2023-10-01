import { CreateOrderDto } from './dto/create-order.dto';
import { Types } from 'mongoose';
export declare class OrderService {
    create(body: CreateOrderDto, _id: Types.ObjectId): Promise<{
        message: string;
    }>;
    findAll(_id: Types.ObjectId): Promise<{
        jami: number;
        data: any[];
    }>;
    remove(_id: Types.ObjectId): Promise<{
        message: string;
    }>;
    minus(_id: Types.ObjectId): Promise<{
        message: string;
    }>;
    clear(_id: Types.ObjectId): Promise<{
        message: string;
    }>;
}
