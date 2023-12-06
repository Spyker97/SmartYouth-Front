import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordSoftComponent } from './dashbord-soft/dashbord-soft.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUPComponent } from './sign-up/sign-up.component';
import { VentilateurComponent } from './ventilateur-climatiseur/ventilateur.component';
import { AlarmeComponent } from './alarme/alarme.component';
import { EtageComponent } from './etage/etage.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordSoftComponent,
    SignInComponent,

    SignUPComponent,
    VentilateurComponent,
    AlarmeComponent,
    EtageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
