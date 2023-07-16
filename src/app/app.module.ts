import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HelpersModule } from './components/helpers/helpers.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { MembershipComponent } from './components/pages/membership/membership.component';


@NgModule({
  declarations: [
    AppComponent,
    MembershipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelpersModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
