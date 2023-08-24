import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { AllMembersComponent } from './all-members/all-members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpersModule } from '../helpers/helpers.module';
import { ViewEditComponent } from './view-edit/view-edit.component';
import { AddNewMemberComponent } from './add-new-member/add-new-member.component';


@NgModule({
  declarations: [
    MemberProfileComponent,
    AllMembersComponent,
    DashboardComponent,
    ViewEditComponent,
    AddNewMemberComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HelpersModule
    
  ],
  exports:[
    
  ]
})
export class AdminModule { }
