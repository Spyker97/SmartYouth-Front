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
import { LumierComponent } from './lumier/lumier.component';
import { DimmingComponent } from './dimming/dimming.component';
import { TestalertComponent } from './testalert/testalert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddscenarioComponent } from './addscenario/addscenario.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { HomedashboardComponent } from './homedashboard/homedashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    DashbordSoftComponent,
    SignInComponent,

    EtageComponent,
    LumierComponent,
    DimmingComponent,
    TestalertComponent,
    AddscenarioComponent,
    ScenarioComponent,
    SignUPComponent,
    VentilateurComponent,
    AlarmeComponent,
    HomedashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule ,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
