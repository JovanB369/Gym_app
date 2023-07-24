import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/Member';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  @Input() member:Member = new Member();
}
