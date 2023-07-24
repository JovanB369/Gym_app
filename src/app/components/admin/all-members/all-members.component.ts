import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';


@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.scss']
})
export class AllMembersComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService){}

  ngOnInit(): void {
    this.memberService.getAllMembers().subscribe(data =>{
      this.members = data
    })
  }

}
