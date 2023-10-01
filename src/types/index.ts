import { Types } from 'mongoose';

export interface ReturnType {
  message: string;
  status: number;
}

declare module 'express' {
  interface Request {
    user_id: Types.ObjectId;
  }
}
