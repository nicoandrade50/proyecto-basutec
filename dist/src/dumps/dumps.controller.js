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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DumpsController = void 0;
const common_1 = require("@nestjs/common");
const dumps_service_1 = require("./dumps.service");
const create_dump_dto_1 = require("./dto/create-dump.dto");
const update_dump_dto_1 = require("./dto/update-dump.dto");
const swagger_1 = require("@nestjs/swagger");
let DumpsController = class DumpsController {
    constructor(dumpsService) {
        this.dumpsService = dumpsService;
    }
    create(createDumpDto) {
        return this.dumpsService.create(createDumpDto);
    }
    findUbication() {
        return this.dumpsService.findUbication();
    }
    findOne(id) {
        return this.dumpsService.findOne(+id);
    }
    update(id, updateDumpDto) {
        return this.dumpsService.update(+id, updateDumpDto);
    }
    remove(id) {
        return this.dumpsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dump_dto_1.CreateDumpDto]),
    __metadata("design:returntype", void 0)
], DumpsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("ubication"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DumpsController.prototype, "findUbication", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DumpsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dump_dto_1.UpdateDumpDto]),
    __metadata("design:returntype", void 0)
], DumpsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DumpsController.prototype, "remove", null);
DumpsController = __decorate([
    (0, common_1.Controller)('dumps'),
    (0, swagger_1.ApiTags)("dumps"),
    __metadata("design:paramtypes", [dumps_service_1.DumpsService])
], DumpsController);
exports.DumpsController = DumpsController;
//# sourceMappingURL=dumps.controller.js.map