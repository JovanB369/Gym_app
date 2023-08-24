import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-log-user-form',
  templateUrl: './log-user-form.component.html',
  styleUrls: ['./log-user-form.component.scss']
})
export class LogUserFormComponent {
  @Input() h1Text:string
  @Input() buttonText:string
  @Input() forEdit:boolean = false;
  @Input() forLogin:boolean = false;

  @Input() user:User = new User();

  constructor(private auth:AuthService) {}

  login(){
    if (!this.user.username || !this.user.hashedPassword) {
      alert("Unesite sve podatke!");
      return;
    }

    this.auth.login(this.user).subscribe((data: any) => {
      if (data.success) {
        localStorage.setItem('users-token', data.token); 
        window.location.href = '/';
      }
      else {
        alert("Pogresni podaci!"); 
      }
    })
  }

  saveEdit(){

  }
}
