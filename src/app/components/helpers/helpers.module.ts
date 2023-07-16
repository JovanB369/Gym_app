import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpersRoutingModule } from './helpers-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TestimonialCardComponent
  ],
  imports: [
    CommonModule,
    HelpersRoutingModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    TestimonialCardComponent
  ]
})
export class HelpersModule { }
