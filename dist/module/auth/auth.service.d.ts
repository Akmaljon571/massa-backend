import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthService {
    login({ name, password }: LoginAuthDto): Promise<{
        token: string;
    }>;
}
