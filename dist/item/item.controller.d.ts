import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(createItemDto: CreateItemDto): Promise<import(".prisma/client").Inventory>;
    findAll(): Promise<import(".prisma/client").Inventory[]>;
    findOne(id: string): Promise<{
        data: import(".prisma/client").Inventory;
    }>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<import(".prisma/client").Inventory>;
    remove(id: string): string;
}
