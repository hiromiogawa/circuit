/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
declare enum TireManufacturers {
    BRIDGESTONE = "BRIDGESTONE",
    DUNLOP = "DUNLOP",
    YOKOHAMA = "YOKOHAMA",
    TOYOTIRE = "TOYOTIRE",
    GOODYEAR = "GOODYEAR",
    Continental = "Continental",
    HANKOOK = "HANKOOK",
    MICHELIN = "MICHELIN"
}
export declare class TireManufacturer extends Document {
    name: TireManufacturers;
}
export declare const TireManufacturerSchema: import("mongoose").Schema<TireManufacturer, import("mongoose").Model<TireManufacturer, any, any, any, Document<unknown, any, TireManufacturer> & Omit<TireManufacturer & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TireManufacturer, Document<unknown, {}, import("mongoose").FlatRecord<TireManufacturer>> & Omit<import("mongoose").FlatRecord<TireManufacturer> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
export type TireManufacturerDocument = TireManufacturer & Document;
export {};
