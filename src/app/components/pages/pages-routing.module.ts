import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MembershipComponent } from './membership/membership.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AllMembersComponent } from '../admin/all-members/all-members.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path:'membership',component:MembershipComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: SignUpFormComponent},
  { path: 'schedule-workout' , component: ScheduleComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
