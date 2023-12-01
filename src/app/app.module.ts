import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordSoftComponent } from './dashbord-soft/dashbord-soft.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EtageComponent } from './etage/etage.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordSoftComponent,
    SignInComponent,
    EtageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
