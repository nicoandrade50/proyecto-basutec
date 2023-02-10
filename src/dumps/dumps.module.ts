import { Module } from '@nestjs/common';
import { DumpsService } from './dumps.service';
import { DumpsController } from './dumps.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DumpsController],
  providers: [DumpsService],
  imports: [PrismaModule],
})
export class DumpsModule {}
