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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class ProductService {
    findAll(son: string, page: string): Promise<(import("mongoose").Document<unknown, {}, {
        order: import("mongoose").Types.ObjectId[];
        like: import("mongoose").Types.ObjectId[];
        pro: import("mongoose").Types.ObjectId[];
        title?: string;
        category?: import("mongoose").Types.ObjectId;
        price?: number;
        chegirma?: string;
        oldPrice?: number;
    }> & {
        order: import("mongoose").Types.ObjectId[];
        like: import("mongoose").Types.ObjectId[];
        pro: import("mongoose").Types.ObjectId[];
        title?: string;
        category?: import("mongoose").Types.ObjectId;
        price?: number;
        chegirma?: string;
        oldPrice?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string, son: string, page: string): Promise<import("mongoose").Types.ObjectId[]>;
    find(_id: string): Promise<import("mongoose").Document<unknown, {}, {
        order: import("mongoose").Types.ObjectId[];
        like: import("mongoose").Types.ObjectId[];
        pro: import("mongoose").Types.ObjectId[];
        title?: string;
        category?: import("mongoose").Types.ObjectId;
        price?: number;
        chegirma?: string;
        oldPrice?: number;
    }> & {
        order: import("mongoose").Types.ObjectId[];
        like: import("mongoose").Types.ObjectId[];
        pro: import("mongoose").Types.ObjectId[];
        title?: string;
        category?: import("mongoose").Types.ObjectId;
        price?: number;
        chegirma?: string;
        oldPrice?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
