import { PrismaService } from 'src/prisma/prisma.service';
export declare class ShowcaseService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<unknown>;
    findOne(id: number): Promise<unknown>;
}
