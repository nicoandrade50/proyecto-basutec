import { DumpsService } from './dumps.service';
import { CreateDumpDto } from './dto/create-dump.dto';
import { UpdateDumpDto } from './dto/update-dump.dto';
export declare class DumpsController {
    private readonly dumpsService;
    constructor(dumpsService: DumpsService);
    create(createDumpDto: CreateDumpDto): import(".prisma/client").Prisma.Prisma__DumpClient<import(".prisma/client").Dump, never>;
    findUbication(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Dump[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__DumpClient<import(".prisma/client").Dump, never>;
    update(id: string, updateDumpDto: UpdateDumpDto): import(".prisma/client").Prisma.Prisma__DumpClient<import(".prisma/client").Dump, never>;
    remove(id: string): string;
}
