import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ItemModule } from './item/item.module';
import { ShowcaseModule } from './showcase/showcase.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ItemModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ShowcaseModule,
  ],
})
export class AppModule {}
