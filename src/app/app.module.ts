import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { ClientComponent } from './client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DpDatePickerModule } from 'ng2-date-picker';
import { FooterComponent } from './Layout/footer/footer.component';
import { FormsModule } from '@angular/forms'
import { SearchComponent } from './client/search/search.component';
import { SheduleComponent } from './client/shedule/shedule.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SheduleComponent,
    NavbarComponent,
    ClientComponent,
    FooterComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DpDatePickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
