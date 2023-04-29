import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: {
            _id: any;
            username: string;
            imagePath: string;
        };
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
    checkAuth(req: any): {
        isAuthenticated: boolean;
        user: any;
    };
}
