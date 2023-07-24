import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMembersComponent } from './all-members/all-members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { ViewEditComponent } from './view-edit/view-edit.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: 'dashboard/all-members' ,component:AllMembersComponent},
  {path: 'dashboard/all-members/member-profile/:id' ,component:MemberProfileComponent},
  {path:'dashboard/all-members/view-edit', component: ViewEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
