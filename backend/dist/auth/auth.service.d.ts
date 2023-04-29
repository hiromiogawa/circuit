import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    validateUser(email: string, password: string): Promise<boolean>;
    login(loginUser: LoginUserDto, req: any): Promise<{
        user: {
            _id: any;
            username: string;
            imagePath: string;
        };
    }>;
}
