import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HelpersModule } from '../helpers/helpers.module';


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HelpersModule
  ]
})
export class PagesModule { }
