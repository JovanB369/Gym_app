import { Component } from '@angular/core';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.scss']
})
export class ViewEditComponent {
  h1Text:string = 'Edit Member'
  buttonText:string = 'Edit'

  check:boolean = true;
  
  
}
