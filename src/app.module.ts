import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [TasksModule, CoreModule],
})
export class AppModule {}
