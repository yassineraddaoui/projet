import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatureComponent } from 'src/components/condidature/condidature.component';
import { AdminComponent } from 'src/components/Admin/Admin.component';
import { MenuAdminComponent } from 'src/components/Admin/menuAdmin/menuAdmin.component';
import { EnfantComponent } from 'src/components/condidature/enfant/enfant.component';
import { LoginComponent } from 'src/components/login/login.component';
import { PdfCondidatureComponent } from 'src/components/condidature/pdfCondidature/pdfCondidature.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'condidature',component:CondidatureComponent},
  {path:'nf',component:EnfantComponent},
  {path:'x',component:PdfCondidatureComponent},
  {path: 'logout', component: LoginComponent},

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'statistique', component: MenuAdminComponent}, 
      {path: 'login', component: LoginComponent}, 
      {path: 'list', component: MenuAdminComponent}, 
      {path: 'logout', component: LoginComponent},
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }