import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Candidat } from 'src/app/Candidat';
import { Formation } from 'src/app/Formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent  {

  constructor() { }
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() candidat!:Candidat;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onChangeFormation(event:any) {
       const value = event.target.value;
      this.candidat.formation.diplome_formation=value;
   }
   public onChangeSpec(event:any) {
    const value = event.target.value;
    this.candidat.formation.specialite_formation=value;
 }
}
