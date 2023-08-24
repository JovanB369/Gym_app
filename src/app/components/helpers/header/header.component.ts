import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth-service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isLoggedIn = this.auth.isLoggedIn();
  username = this.auth.isLoggedIn() ? this.auth.getUserData().username : '';
  isAdmin = this.auth.isAdmin();


  constructor(private auth: AuthService, private mService:MemberService, private aRoute:ActivatedRoute){}

  logout(){
    localStorage.clear(); 
    window.location.href = '/'; 
  }

  ngOnInit(): void {
    console.log(this.auth.getUserData())
  }

  

  


}
