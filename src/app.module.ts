import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FilterModule } from './filter/filter.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { config } from 'dotenv';
config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOURI),
    InterceptorsModule,
    FilterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
