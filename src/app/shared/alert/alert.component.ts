import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alert } from './../../model/interface/alert';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() message: string = '';
  @Input() type: Alert = Alert.Info;

  @Output() onAlertClicked = new EventEmitter<any>();

  onClick() {
    this.onAlertClicked.emit('Hai Raccoon');
  }
}
