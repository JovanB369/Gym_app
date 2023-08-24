import { Component } from '@angular/core';

@Component({
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  h1Text:string = 'Sign-Up';
  forEdit:boolean = true;
  forInsert: boolean = true;
}
