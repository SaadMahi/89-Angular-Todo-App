import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/mock/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  // as we passed in props of tasks in task-items we need to be able to use that prop
  @Input() task: Task; // now we will be able to use it

  // we want to bring all the functions we will be using in tasks-items to it's parentClass(tasks)
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  // Icons
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  // On Toggle for reminder
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  // Delete Btn
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
