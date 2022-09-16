import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowcaseService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    const data = await this.prisma.$queryRaw(
      Prisma.raw(
        `select value, round(value*1.7, 2) as "retailValue" from inventory;`,
      ),
    );
    return data;
  }

  async findOne(id: number) {
    try {
      const data = await this.prisma.$queryRaw(
        Prisma.raw(
          `select value, round(value*1.7, 2) as "retailValue" from inventory
          where itemId = ${id};`,
        ),
      );
      return data;
    } catch (error) {
      if (error === '1064') {
        return 'There is something wrong with your SQL sentence, maybe is break line.';
      }
    }
  }
}
