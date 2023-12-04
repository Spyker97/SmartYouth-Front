import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordSoftComponent } from './dashbord-soft/dashbord-soft.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EtageComponent } from './etage/etage.component';
import { LumierComponent } from './lumier/lumier.component';
import { DimmingComponent } from './dimming/dimming.component';
import { TestalertComponent } from './testalert/testalert.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { AddscenarioComponent } from './addscenario/addscenario.component';
import { HomedashboardComponent } from './homedashboard/homedashboard.component';
const routes: Routes = [
  {path:'home' , component:DashbordSoftComponent ,children :[
    {path:'etage' , component:EtageComponent , outlet:'adminbody'   },
    {path:'dashboard' , component:HomedashboardComponent , outlet:'adminbody'   },
    {path:'scenario' , component:ScenarioComponent , outlet:'adminbody'   },
    {path:'addscenario' , component:AddscenarioComponent , outlet:'adminbody'   }



    //{path:'addlivreur' , component:AddLivreurComponent, outlet:'adminbody'}
  ]},
  {path:'signin', component:SignInComponent},
  {path:'dimming', component:DimmingComponent},
  {path:'alert', component:TestalertComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
