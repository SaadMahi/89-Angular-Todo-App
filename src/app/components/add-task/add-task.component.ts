import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/mock/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // form inputs type
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription;

  // always remember in order to use service we always have to add them to our constructor
  constructor(
    private toastr: ToastrService,
    private uiService: UiService,
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((bool) => (this.showAddTask = bool));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      this.toastr.warning('Please add a task');
      return;
    }
    if (!this.day) {
      this.toastr.warning('Please add a day');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // todo emitter
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

    this.toastr.success('Task Added');
  }
}
