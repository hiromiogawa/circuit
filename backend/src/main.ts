import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'
import * as FileStore from 'session-file-store'

const FileStoreSession = FileStore(session)

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // CORS を有効にし、Next.js アプリケーションのオリジンを許可する
  app.enableCors({
    origin: process.env.FRONT_DOMAIN, // Next.js アプリケーションのオリジン
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
  })

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: new FileStoreSession({
        mkdir: true
      })
    })
  )

  await app.listen(3000)
}
bootstrap()
