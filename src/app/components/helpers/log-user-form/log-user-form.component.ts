import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-log-user-form',
  templateUrl: './log-user-form.component.html',
  styleUrls: ['./log-user-form.component.scss']
})
export class LogUserFormComponent {
  @Input() h1Text:string
  @Input() buttonText:string
}
