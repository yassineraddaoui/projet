import { NgModule,EventEmitter } from '@angular/core';
import { LoginComponent } from 'src/components/login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { RadioComponent } from 'src/components/login/login/radio/radio.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    RadioComponent,
    FooterComponent,
    EnfantComponent,
    CondidatureComponent,
    ParentComponent,
    HandicapComponent,
    MarieComponent,
    FrereComponent,
    NiveauComponent,
    SupérieurComponent,
    FormationComponent,
    InfoComponent,
    PermisComponent,
    ContactComponent,
    ResultatComponent,
    SpecialiteComponent,
    
    
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
