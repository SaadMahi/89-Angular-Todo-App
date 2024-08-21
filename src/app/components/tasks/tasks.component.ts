import { Component, OnInit } from '@angular/core';
import { Task } from '../../mock/Task';

// imported service component from services so we can use (we can use it anywhere)
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // in order to use a service we will have to provide a provider into the constructor
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // using service
    this.taskService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }

  // toggle reminder
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  // delete task function
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((_task) => _task.id !== task.id)),
      );
  }

  // add task
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => this.tasks.push(task));
  }
}
