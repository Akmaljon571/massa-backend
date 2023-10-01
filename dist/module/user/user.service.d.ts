/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Types } from 'mongoose';
import { UpdateUserDto } from './dto/update-order.dto';
export declare class UserService {
    findOne(_id: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, {
        order: Types.ObjectId[];
        like: Types.ObjectId[];
        name?: string;
        password?: string;
        gender?: boolean;
        age?: number;
    }> & {
        order: Types.ObjectId[];
        like: Types.ObjectId[];
        name?: string;
        password?: string;
        gender?: boolean;
        age?: number;
    } & {
        _id: Types.ObjectId;
    }>;
    update(_id: Types.ObjectId, { name, password, gender, age }: UpdateUserDto): Promise<{
        token: string;
    }>;
}
