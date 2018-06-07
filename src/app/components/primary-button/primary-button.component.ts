import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {
  @Output() handler: EventEmitter = new EventEmitter();
  @Input() text: string;
  @Input() logo: string;

  constructor() { }

}
