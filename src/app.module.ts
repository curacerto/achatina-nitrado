import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ServiceModule } from './domain/service/service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the module globally available
    }),
    ServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
