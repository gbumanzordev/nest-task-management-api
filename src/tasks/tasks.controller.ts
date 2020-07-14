import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { RequestResponse } from '../core/interfaces/response.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { PagedResponse } from '../core/interfaces/paged-response.model';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  /*
  @Get()
  getTasks(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto
  ): PagedResponse<Task[]> {
    let data: Task[];
    if (Object.keys(filterDto).length) {
      data = this.tasksService.getTasksWithFilters(filterDto);
    } else {
      data = this.tasksService.getAllTasks();
    }

    return { data };
  }
  
  */

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }
  /*
  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): RequestResponse<Task> {
    const data = this.tasksService.createTask(createTaskDto);
    return { data };
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus
  ) {
    const data = this.tasksService.updateTaskStatus(id, status);
    return { data };
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string) {
    this.tasksService.deleteTaskById(id);
  }*/
}
