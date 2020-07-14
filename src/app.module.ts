import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TasksModule, CoreModule],
})
export class AppModule {}
