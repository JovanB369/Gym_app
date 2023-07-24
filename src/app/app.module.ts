import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HelpersModule } from './components/helpers/helpers.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelpersModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
