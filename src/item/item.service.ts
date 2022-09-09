import { Body, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateItemDto,
  createData,
} from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}
  async create(@Body() dto: CreateItemDto) {
    const data = await this.prisma.inventory.create({
      data: {
        description: dto.description,
        color: dto.color,
        marca: dto.marca,
        ncmId: dto.ncmId,
        value: dto.value,
        quantity: dto.quantity,
        type: dto.type,
        total: Math.ceil(dto.quantity * dto.value),
      },
    });
    console.log(data);
    return data;
  }

  findAll() {
    return `This action returns all item`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
