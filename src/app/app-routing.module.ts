import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatureComponent } from 'src/components/condidature/condidature.component';
import { AdminComponent } from 'src/components/Admin/Admin.component';
import { MenuAdminComponent } from 'src/components/Admin/menuAdmin/menuAdmin.component';
import { EnfantComponent } from 'src/components/condidature/enfant/enfant.component';
import { LoginComponent } from 'src/components/login/login.component';
import { PdfCondidatureComponent } from 'src/components/condidature/pdfCondidature/pdfCondidature.component';
import { StatisticsComponent } from 'src/components/Admin/statistics/statistics.component';
import { LoginAdminComponent } from 'src/components/Admin/loginAdmin/loginAdmin.component';
import { AdminsComponent } from 'src/components/Admin/admins/admins.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'condidature',component:CondidatureComponent},
  {path:'nf',component:EnfantComponent},
  {path:'x',component:PdfCondidatureComponent},
  {path: 'logout', component: LoginComponent},
  {path:'admin/login',component:LoginAdminComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'statistique', component: StatisticsComponent}, 
      {path: 'list', component: MenuAdminComponent}, 
      {path:'admins',component:AdminsComponent}
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }