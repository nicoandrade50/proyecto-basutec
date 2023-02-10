import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DumpsModule } from './dumps/dumps.module';

@Module({
  imports: [PrismaModule, DumpsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
