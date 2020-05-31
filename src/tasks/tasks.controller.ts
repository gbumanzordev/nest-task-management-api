import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { RequestResponse } from '../core/interfaces/response.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): RequestResponse<Task[]> {
    const data = this.tasksService.getAllTasks();
    return { data };
  }

  @Get('/:id')
  getTaskById(@Param() id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): RequestResponse<Task> {
    const data = this.tasksService.createTask(createTaskDto);
    return { data };
  }
}
