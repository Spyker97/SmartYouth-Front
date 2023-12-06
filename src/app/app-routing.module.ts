import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordSoftComponent } from './dashbord-soft/dashbord-soft.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { VentilateurComponent } from './ventilateur-climatiseur/ventilateur.component';
import { AlarmeComponent } from './alarme/alarme.component';

import { EtageComponent } from './etage/etage.component';
const routes: Routes = [
  {path:'home' , component:DashbordSoftComponent ,children :[
    {path:'etage' , component:EtageComponent , outlet:'adminbody'}


    //{path:'addlivreur' , component:AddLivreurComponent, outlet:'adminbody'}
  ]},
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUPComponent},
  {path:'fan', component:VentilateurComponent},
  {path:'alarme', component:AlarmeComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
