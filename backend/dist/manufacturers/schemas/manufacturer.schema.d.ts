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
declare enum CarManufacturer {
    TOYOTA = "TOYOTA",
    HONDA = "HONDA",
    MAZDA = "MAZDA",
    NISSAN = "NISSAN",
    SUBARU = "SUBARU",
    MITSUBISHI = "MITSUBISHI",
    SUZUKI = "SUZUKI",
    LEXUS = "LEXUS"
}
export declare class Manufacturer extends Document {
    name: CarManufacturer;
}
export declare const ManufacturerSchema: import("mongoose").Schema<Manufacturer, import("mongoose").Model<Manufacturer, any, any, any, Document<unknown, any, Manufacturer> & Omit<Manufacturer & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Manufacturer, Document<unknown, {}, import("mongoose").FlatRecord<Manufacturer>> & Omit<import("mongoose").FlatRecord<Manufacturer> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
export type ManufacturerDocument = Manufacturer & Document;
export {};
