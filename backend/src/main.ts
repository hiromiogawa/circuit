import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'
import * as FileStore from 'session-file-store'

const FileStoreSession = FileStore(session)

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      store: new FileStoreSession({})
    })
  )

  await app.listen(3000)
}
bootstrap()
