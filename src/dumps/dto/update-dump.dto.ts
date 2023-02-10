import { PartialType } from '@nestjs/swagger';
import { CreateDumpDto } from './create-dump.dto';

export class UpdateDumpDto extends PartialType(CreateDumpDto) {}
