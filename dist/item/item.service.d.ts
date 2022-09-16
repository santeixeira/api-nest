import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemService {
    private prisma;
    private config;
    constructor(prisma: PrismaService, config: ConfigService);
    create(dto: CreateItemDto): Promise<import(".prisma/client").Inventory>;
    findAll(): Promise<import(".prisma/client").Inventory[]>;
    findOne(id: number): Promise<{
        data: import(".prisma/client").Inventory;
    }>;
    update(id: number, updateItemDto: UpdateItemDto): Promise<import(".prisma/client").Inventory>;
    remove(id: number): string;
}
