import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  showAddTask: boolean = false;
  subscription: Subscription;

  // always remember in order to use service we always have to add them to our constructor
  constructor(
    private uiService: UiService,
    private router: Router,
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((bool) => (this.showAddTask = bool));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('Toggle');
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
