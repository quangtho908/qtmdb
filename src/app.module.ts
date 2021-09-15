import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { database } from './shared/enviroment';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot(database.uri),
    TaskModule
  ]
})
export class AppModule {}
