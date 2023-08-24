import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/Member';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  @Input() user: User = new User();
}
