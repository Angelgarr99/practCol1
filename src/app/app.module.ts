import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { saludarComponent } from './componentes/saludar/saludar.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { FormAppComponent } from './componentes/form-app/form-app.component';
import { AddAppComponent } from './componentes/add-app/add-app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    saludarComponent,
    HomeComponent,
    FormAppComponent,
    AddAppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
