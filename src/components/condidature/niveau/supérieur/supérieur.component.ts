import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Candidat } from 'src/app/model/Candidat';

@Component({
  selector: 'app-superieur',
  templateUrl: './supérieur.component.html',
  styleUrls: ['./supérieur.component.css']
})
export class SupérieurComponent  {
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() candidat!:Candidat;
  constructor() { }

  
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onChange(event:any) {
      const value = event.target.value;
      this.candidat.niveauSuperieur.diplome=value;
   }
   public onChangeSpec(event:any) {
    const value = event.target.value;
    this.candidat.niveauSuperieur.specialite=value;
 }
}
