import {
  Controller,
  Post,
  Get,
  Res,
  Param,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import * as path from 'path'
import { Response } from 'express'

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.join(__dirname, '../../../images'))
        },
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`)
        }
      }),
      limits: {
        fileSize: 2 * 1024 * 1024 // 2MB
      },
      fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ['image/jpeg', 'image/png']
        if (allowedMimeTypes.includes(file.mimetype)) {
          cb(null, true)
        } else {
          cb(new Error('Invalid file type'), false)
        }
      }
    })
  )
  upload(@UploadedFile() file: Express.Multer.File): {
    message: string
    fileName: string
  } {
    return {
      message: 'File uploaded successfully',
      fileName: file.filename
    }
  }

  @Get(':filename')
  async getFile(
    @Param('filename') filename: string,
    @Res() res: Response
  ): Promise<any> {
    const filePath = path.join(__dirname, '..', '..', '..', 'images', filename)
    res.sendFile(filePath)
  }
}
