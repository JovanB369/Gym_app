import { Component, Host, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MemberService } from 'src/app/services/member.service';



@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.scss']
})
export class AllMembersComponent implements OnInit {

  users: User[];
  user:User;

  constructor(private memberService: MemberService){}

  ngOnInit(): void {
    this.memberService.getAllUsers().subscribe(data =>{
      this.users = data
    })
  }

  deleteUser(id:number){
    if (confirm("Are you sure?")) {
      this.memberService.deleteUser(id).subscribe()
      window.location.href = '/all-members'
      }
    }
  }


