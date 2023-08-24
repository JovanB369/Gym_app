import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMembersComponent } from './all-members/all-members.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { ViewEditComponent } from './view-edit/view-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewMemberComponent } from './add-new-member/add-new-member.component';

const routes: Routes = [
  {path: 'dashboard',component:DashboardComponent} ,
  {path: 'all-members' ,component:AllMembersComponent ,},
  {path: 'dashboard/member-profile/:id' ,component:MemberProfileComponent},
  {path:'dashboard/view-edit/:id', component: ViewEditComponent},
  {path: 'dashboard/add-new-member', component:AddNewMemberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
