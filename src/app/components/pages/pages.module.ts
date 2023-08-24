import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HelpersModule } from '../helpers/helpers.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { MembershipComponent } from './membership/membership.component';
import { CalendarModule,DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


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
    CalendarModule.forRoot({provide: DateAdapter,
      useFactory: adapterFactory,}),
    ],
})
export class PagesModule { }
