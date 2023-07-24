import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpersRoutingModule } from './helpers-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProfileComponent } from './profile/profile.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogUserFormComponent } from './log-user-form/log-user-form.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TestimonialCardComponent,
    ProfileComponent,
    RegisterFormComponent,
    LogUserFormComponent
  ],
  imports: [
    CommonModule,
    HelpersRoutingModule,
    RouterModule,
    CarouselModule.forRoot()
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    TestimonialCardComponent,
    ProfileComponent,
    RegisterFormComponent,
    LogUserFormComponent
    
  ]
})
export class HelpersModule { }
