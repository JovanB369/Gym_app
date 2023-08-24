import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/Member';
import { User } from 'src/app/models/User';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.scss']
})
export class ViewEditComponent implements OnInit{
  user: User = new User()

  h1Text:string = 'Edit Member'
  forInsert:boolean = true;
  forRegister:boolean = true;

  check:boolean = true;

  constructor(private aRoute:ActivatedRoute, private service:MemberService){}

  
ngOnInit(): void {
  this.aRoute.params.subscribe(paramData =>{
  let userID: number = paramData['id'];
  this.service.getUserByID(userID).subscribe(data =>{
   this.user = data;    
  }) 
})
}
  
  
  
}
