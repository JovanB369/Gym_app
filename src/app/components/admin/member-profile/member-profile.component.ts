import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit {

  member:Member = new Member();

  check:boolean = false;

  constructor( private mService:MemberService , private http:HttpClient,private aRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.aRoute.params.subscribe(paramsData =>{
      let memberID: number = paramsData['id'];
      this.mService.getMemberByID(memberID).subscribe(data =>{
        this.member = data;
      })
    })
  }
}
