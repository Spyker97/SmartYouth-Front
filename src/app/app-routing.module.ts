import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordSoftComponent } from './dashbord-soft/dashbord-soft.component';
import { SignInComponent } from './sign-in/sign-in.component';
const routes: Routes = [
  {path:'homeDashbord', component:DashbordSoftComponent},
  {path:'signin', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
