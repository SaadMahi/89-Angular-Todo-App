import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // Inputs are used like props chaging color and text
  @Input() text: string = '';
  @Input() color: string = '';
  // Output along with EventEmitter is used to add custom functionality to btn and keep it reusable
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
