import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module'
import * as session from 'express-session'
import { ConfigModule } from '@nestjs/config'
import { CarsModule } from './cars/cars.module'
import { TiresModule } from './tires/tires.module'
import { TireManufacturersModule } from './tire_manufacturers/tire_manufacturers.module'
import { CircuitsModule } from './circuit/circuits.module'
import { TuningModule } from './tuning/tuning.module'
import { SettingsModule } from './settings/settings.module'
import { UploadModule } from './upload/upload.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      envFilePath: '.env.local'
    }),
    UsersModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    CarsModule,
    TiresModule,
    TireManufacturersModule,
    CircuitsModule,
    TuningModule,
    SettingsModule,
    UploadModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: process.env.SESSION_SECRET,
          resave: false,
          saveUninitialized: false,
          rolling: true,
          cookie: {
            maxAge: 60 * 60 * 1000
          }
        })
      )
      .forRoutes('*')
  }
}
