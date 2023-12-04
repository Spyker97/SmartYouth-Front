import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordSoftComponent } from './dashbord-soft/dashbord-soft.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EtageComponent } from './etage/etage.component';
import { LumierComponent } from './lumier/lumier.component';
import { DimmingComponent } from './dimming/dimming.component';
import { FormsModule } from '@angular/forms';
import { TestalertComponent } from './testalert/testalert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddscenarioComponent } from './addscenario/addscenario.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { HomedashboardComponent } from './homedashboard/homedashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



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
    HomedashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
