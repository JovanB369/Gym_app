import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
 
  h1Text:string = 'Login'
  buttonText:string = 'Login'
  
}
