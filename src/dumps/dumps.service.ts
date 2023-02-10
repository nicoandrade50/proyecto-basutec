import { Injectable } from '@nestjs/common';
import { CreateDumpDto } from './dto/create-dump.dto';
import { UpdateDumpDto } from './dto/update-dump.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DumpsService {
constructor(private prisma: PrismaService) {}

  create(createDumpDto: CreateDumpDto) {
    return this.prisma.dump.create({ data: createDumpDto});
  }

  findUbication() {
    return this.prisma.dump.findMany({where: { ubication: 1} });
 }

 findOne(id: number) {
   return this.prisma.dump.findUnique({where: {id}});
 }

 update(id: number, updateCreatureDto: UpdateDumpDto) {
   return this.prisma.dump.update({
where: {id},
data: UpdateDumpDto,
   });
 }

 remove(id: number) {
   return `This action removes a #${id} dump`;
 }
}
