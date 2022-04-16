import { Component, OnInit, Output,EventEmitter, Input, OnDestroy } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Candidat } from 'src/app/Candidat';
import { NiveauEtude } from 'src/app/NiveauEtude';
import { NiveauSuperieur } from 'src/app/NiveauSuperieur';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent  {
  selectedSc="Lettres";
  selected="Superieur";
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() candidat!:Candidat;
  constructor() { }
  
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onChange(event:any) {
       this.selected = event.target.value ;
      this.candidat.niveauEtude.niveau_candidat=this.selected;
    }
     public onChangeSection(event:any) {
    this.selectedSc = event.target.value;
    this.candidat.niveauEtude.specialite_etude=this.selectedSc;
    console.log(this.candidat.niveauEtude);

 }
}

