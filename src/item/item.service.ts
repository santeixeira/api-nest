import { Body, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
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
        total: parseFloat(
          (dto.value * dto.quantity).toFixed(2),
        ),
      },
    });
    console.log(data);
    return data;
  }

  async findAll() {
    const data = await this.prisma.inventory.findMany();
    return data;
  }

  async findOne(id: number) {
    const txt =
      await this.prisma.inventory.findFirstOrThrow({
        where: {
          itemId: id,
        },
      });
    return { data: txt };
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const data = await this.prisma.inventory.update({
      where: {
        itemId: id,
      },
      data: {
        description: updateItemDto.description,
      },
    });
    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
