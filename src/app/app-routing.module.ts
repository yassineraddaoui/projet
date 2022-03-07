import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatureComponent } from 'src/components/condidature/condidature.component';
import { LoginComponent } from 'src/components/login/login/login.component';
import { AdminComponent } from 'src/components/Admin/Admin.component';
import { ParentComponent } from 'src/components/condidature/parent/parent.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'condidature',component:CondidatureComponent},
  {path:'admin',component:AdminComponent},
  {path:'a',component:ParentComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }