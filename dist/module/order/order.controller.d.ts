import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Request } from 'express';
import { Types } from 'mongoose';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto, req: Request): Promise<{
        message: string;
    }>;
    findAll(req: Request): Promise<{
        jami: number;
        data: any[];
    }>;
    remove(id: Types.ObjectId): Promise<{
        message: string;
    }>;
    minus(id: Types.ObjectId): Promise<{
        message: string;
    }>;
    clear(req: Request): Promise<{
        message: string;
    }>;
}
