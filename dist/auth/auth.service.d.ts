import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(dto: AuthDto): Promise<import(".prisma/client").User>;
    signin(dto: AuthDto): Promise<Object>;
    signToken(userId: number, email: string): Promise<Object>;
}
