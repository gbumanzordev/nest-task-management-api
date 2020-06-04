import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
  ];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(
        `The status ${value} is not a valid task status.`
      );
    }

    return value;
  }

  isStatusValid(status: any) {
    const statusIndex = this.allowedStatuses.indexOf(status);
    return statusIndex !== -1;
  }
}
