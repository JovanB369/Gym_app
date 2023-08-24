import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.scss']
})
export class AddNewMemberComponent {
  h1Text:string = 'Add New Member';
  forEdit:boolean = true;
  forRegister:boolean = true;

}
