"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DumpsService = void 0;
const common_1 = require("@nestjs/common");
const update_dump_dto_1 = require("./dto/update-dump.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let DumpsService = class DumpsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createDumpDto) {
        return this.prisma.dump.create({ data: createDumpDto });
    }
    findUbication() {
        return this.prisma.dump.findMany({ where: { ubication: 1 } });
    }
    findOne(id) {
        return this.prisma.dump.findUnique({ where: { id } });
    }
    update(id, updateCreatureDto) {
        return this.prisma.dump.update({
            where: { id },
            data: update_dump_dto_1.UpdateDumpDto,
        });
    }
    remove(id) {
        return `This action removes a #${id} dump`;
    }
};
DumpsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DumpsService);
exports.DumpsService = DumpsService;
//# sourceMappingURL=dumps.service.js.map