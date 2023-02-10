import { ApiProperty } from "@nestjs/swagger";

export class CreateDumpDto {
@ApiProperty()
name: string;

@ApiProperty()
description?: string;

@ApiProperty()
maintenance: string;

@ApiProperty()
ubication: number;

}


