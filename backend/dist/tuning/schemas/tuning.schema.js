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
exports.TuningSchema = exports.Tuning = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mycar_schema_1 = require("../../mycar/schemas/mycar.schema");
let Tuning = class Tuning extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ require: true, type: mongoose_2.SchemaTypes.ObjectId, ref: mycar_schema_1.MyCar.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Tuning.prototype, "mycarId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Tuning.prototype, "freeText", void 0);
Tuning = __decorate([
    (0, mongoose_1.Schema)()
], Tuning);
exports.Tuning = Tuning;
exports.TuningSchema = mongoose_1.SchemaFactory.createForClass(Tuning);
//# sourceMappingURL=tuning.schema.js.map