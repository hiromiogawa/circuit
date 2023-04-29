/// <reference types="multer" />
import { Response } from 'express';
export declare class UploadController {
    upload(file: Express.Multer.File): {
        message: string;
        fileName: string;
    };
    getFile(filename: string, res: Response): Promise<any>;
}
