import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';


import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HelpersModule } from '../helpers/helpers.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { MembershipComponent } from './membership/membership.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    MembershipComponent,
    ScheduleComponent,
    LoginFormComponent,
    SignUpFormComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HelpersModule,
    MatTableModule
    ]
})
export class PagesModule { }
