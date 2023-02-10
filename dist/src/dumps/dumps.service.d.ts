import { CreateDumpDto } from './dto/create-dump.dto';
import { UpdateDumpDto } from './dto/update-dump.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DumpsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDumpDto: CreateDumpDto): import(".prisma/client").Prisma.Prisma__DumpClient<import(".prisma/client").Dump, never>;
    findUbication(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Dump[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__DumpClient<import(".prisma/client").Dump, never>;
    update(id: number, updateCreatureDto: UpdateDumpDto): import(".prisma/client").Prisma.Prisma__DumpClient<import(".prisma/client").Dump, never>;
    remove(id: number): string;
}
