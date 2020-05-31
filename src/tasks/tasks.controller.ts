import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { RequestResponse } from '../core/interfaces/response.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { PagedResponse } from '../core/interfaces/paged-response.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): PagedResponse<Task[]> {
    const data = this.tasksService.getAllTasks();
    return { data };
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): RequestResponse<Task> {
    const data = this.tasksService.getTaskById(id);
    return { data };
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): RequestResponse<Task> {
    const data = this.tasksService.createTask(createTaskDto);
    return { data };
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string) {
    this.tasksService.deleteTaskById(id);
  }
}
