import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  @Input() h1Text:string;
  @Input() buttonText:string;
  @Input() check:boolean= false;
}
