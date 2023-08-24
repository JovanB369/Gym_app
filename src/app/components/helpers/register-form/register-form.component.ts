import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth-service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  @Input() h1Text:string;
  @Input() check:boolean= false;
  @Input() forEdit:boolean = false;
  @Input() forInsert:boolean = false;
  @Input() forRegister:boolean = false
  isLogged = this.auth.isLoggedIn();


  @Input() user:User = new User()
  edit:boolean = false;

  constructor(private service:MemberService,private router:Router,private auth:AuthService){}

  saveEdit(){
    if (this.edit) {
          this.service.updateUserData(this.user).subscribe(data => {
            this.router.navigateByUrl('/all-members'); 
          })
        }
        else {
          this.service.updateUserData(this.user).subscribe(data => {
            this.router.navigateByUrl('/all-members'); 
          })
        }
      }

      register(){
        this.auth.register(this.user).subscribe((data: any) => {
          if (data.success) {
            alert("Registered!"); 
            localStorage.setItem('users-token', data.token); 
            window.location.href = '/'; 
          }else{
            console.log(data)
          }
        })
      }

      addNewMember(){
        this.auth.register(this.user).subscribe((data: any) => {
          if (data.success) {
            alert("New Member Added!"); 
            localStorage.setItem('users-token', data.token); 
            localStorage.clear(); 
            window.location.href = '/dashboard'; 
          }else{
            console.log(data)
          }
        })
      }
    }
    
