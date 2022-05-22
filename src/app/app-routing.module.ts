import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatureComponent } from 'src/components/condidature/condidature.component';
import { AdminComponent } from 'src/components/Admin/Admin.component';
import { MenuAdminComponent } from 'src/components/Admin/menuAdmin/menuAdmin.component';
import { LoginComponent } from 'src/components/login/login.component';
import { PdfCondidatureComponent } from 'src/components/condidature/pdfCondidature/pdfCondidature.component';
import { StatisticsComponent } from 'src/components/Admin/statistics/statistics.component';
import { LoginAdminComponent } from 'src/components/Admin/loginAdmin/loginAdmin.component';
import { AdminsComponent } from 'src/components/Admin/admins/admins.component';
import { NotificationComponent } from 'src/components/Admin/notification/notification.component';
import { ModeratorComponent } from 'src/components/moderator/moderator.component';
import { StatisticsModComponent } from 'src/components/moderator/statistics/statisticsMod.component';
import { MenuModComponent } from 'src/components/moderator/menuMod/menuMod.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'condidature',component:CondidatureComponent},
  {path:'pdf',component:PdfCondidatureComponent},
  {path: 'logout', component: LoginComponent},
  {path:'admin/login',component:LoginAdminComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', component: MenuAdminComponent}, 
      {path: 'notification', component: NotificationComponent}, 
      {path: 'statistique', component: StatisticsComponent}, 
      {path: 'list', component: MenuAdminComponent}, 
      {path:'admins',component:AdminsComponent}
    ]
  },
  {
    path: 'moderator',
    component: ModeratorComponent,
    children: [
      {path: '', component: MenuModComponent}, 
      {path: 'statistique', component: StatisticsModComponent}, 
      {path: 'list', component: MenuModComponent}, 
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }