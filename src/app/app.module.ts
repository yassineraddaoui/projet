import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { RadioComponent } from 'src/components/login/radio/radio.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/components/footer/footer.component';
import { CondidatureComponent } from 'src/components/condidature/condidature.component';
import { EnfantComponent } from 'src/components/condidature/enfant/enfant.component';
import { ParentComponent } from 'src/components/condidature/parent/parent.component';
import { HandicapComponent } from 'src/components/condidature/handicap/handicap.component';
import { MatSelectModule } from '@angular/material/select';
import { MarieComponent } from 'src/components/condidature/marie/marie.component';
import { FrereComponent } from 'src/components/condidature/frere/frere.component';
import { NiveauComponent } from 'src/components/condidature/niveau/niveau.component';
import { SupérieurComponent } from 'src/components/condidature/niveau/supérieur/supérieur.component';
import { FormationComponent } from 'src/components/condidature/niveau/formation/formation.component';
import { InfoComponent } from 'src/components/condidature/info/info.component';
import { PermisComponent } from 'src/components/condidature/info/permis/permis.component';
import { ContactComponent } from 'src/components/condidature/info/contact/contact.component';
import { ResultatComponent } from 'src/components/resultat/resultat.component';
import { SpecialiteComponent } from 'src/components/condidature/specialite/specialite.component';
import { AdminComponent } from 'src/components/Admin/Admin.component';
import { HeaderComponent } from 'src/components/Admin/header/header.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import { MenuAdminComponent } from 'src/components/Admin/menuAdmin/menuAdmin.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Info_prsonlComponent } from 'src/components/condidature/info_prsonl/info_prsonl.component';
import { AuthInterceptor } from './helpers/authInterceptor';
import { LoginComponent } from 'src/components/login/login.component';
import { PdfCondidatureComponent } from 'src/components/condidature/pdfCondidature/pdfCondidature.component';
import { HeaderCondidatureComponent } from 'src/components/condidature/headerCondidature/headerCondidature.component';
import { StatisticsComponent } from 'src/components/Admin/statistics/statistics.component';
import { TstComponent } from 'src/components/Admin/statistics/tst/tst.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoginAdminComponent } from 'src/components/Admin/loginAdmin/loginAdmin.component';
import { AdminsComponent } from 'src/components/Admin/admins/admins.component';
import { NotificationComponent } from 'src/components/Admin/notification/notification.component';
import { MatBadgeModule } from '@angular/material/badge';
import { HeaderModComponent } from 'src/components/moderator/headerMod/headerMod.component';
import { ModeratorComponent } from 'src/components/moderator/moderator.component';
import { TstModComponent } from 'src/components/moderator/statistics/tstMod/tstMod.component';
import { StatisticsModComponent } from 'src/components/moderator/statistics/statisticsMod.component';
import { MenuModComponent } from 'src/components/moderator/menuMod/menuMod.component';
import { SpécialitéComponent } from 'src/components/Admin/spécialité/spécialité.component';

@NgModule({
  declarations: [

    SpécialitéComponent,
    MenuModComponent,
    TstModComponent,
    StatisticsModComponent,
    ModeratorComponent,
    HeaderModComponent,
    AdminsComponent,
    NotificationComponent,
    LoginAdminComponent,
   TstComponent,
    AppComponent,
    Info_prsonlComponent,
    LoginComponent,
    AdminComponent,
    HeaderCondidatureComponent,
    RadioComponent,
    FooterComponent,
    EnfantComponent,
    CondidatureComponent,
    ParentComponent,
    HandicapComponent,
    MarieComponent,
    FrereComponent,
    NiveauComponent,
    StatisticsComponent,
    SupérieurComponent,
    FormationComponent,
    InfoComponent,
    PermisComponent,
    ContactComponent,
    ResultatComponent,
    SpecialiteComponent,
    HeaderComponent,
    MenuAdminComponent,
    AdminComponent,
    PdfCondidatureComponent
  ],
  imports: [
    MatBadgeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    RouterModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
