// backend/src/upload/upload.controller.ts
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import * as path from 'path'

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.join(__dirname, '../../images'))
        },
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`)
        }
      })
    })
  )
  upload(@UploadedFile() file: Express.Multer.File): string {
    return 'File uploaded successfully'
  }
}
