import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordSoftComponent } from './dashbord-soft/dashbord-soft.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EtageComponent } from './etage/etage.component';
const routes: Routes = [
  {path:'home' , component:DashbordSoftComponent ,children :[
    {path:'etage' , component:EtageComponent , outlet:'adminbody'}


    //{path:'addlivreur' , component:AddLivreurComponent, outlet:'adminbody'}
  ]},
  {path:'signin', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
