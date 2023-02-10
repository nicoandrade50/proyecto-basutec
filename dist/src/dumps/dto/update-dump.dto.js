"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDumpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_dump_dto_1 = require("./create-dump.dto");
class UpdateDumpDto extends (0, swagger_1.PartialType)(create_dump_dto_1.CreateDumpDto) {
}
exports.UpdateDumpDto = UpdateDumpDto;
//# sourceMappingURL=update-dump.dto.js.map