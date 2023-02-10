import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DumpsService } from './dumps.service';
import { CreateDumpDto } from './dto/create-dump.dto';
import { UpdateDumpDto } from './dto/update-dump.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('dumps')
@ApiTags ("dumps")
export class DumpsController {
  constructor(private readonly dumpsService: DumpsService) {}

  @Post()
  create(@Body() createDumpDto: CreateDumpDto) {
    return this.dumpsService.create(createDumpDto);
  }

  @Get("ubication")
  findUbication() {
    return this.dumpsService.findUbication();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dumpsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateDumpDto: UpdateDumpDto
    ) {
    return this.dumpsService.update(+id, updateDumpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dumpsService.remove(+id);
  }
}
