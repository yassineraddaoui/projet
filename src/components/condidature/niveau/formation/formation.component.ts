import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Candidat } from 'src/app/Candidat';
import { Formation } from 'src/app/Formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor() { }
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() candidat!:Candidat;
  value!:string;
  valueSp!:string;
  ngOnInit() {
    if(this.candidat.formation===null){
      this.candidat.formation=new Formation();
    }

  }

    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onChangeFormation(event:any) {
       this.value = event.target.value;
      this.candidat.formation.diplome_formation=this.value;
   }
   public onChangeSpec(event:any) {
    this.valueSp = event.target.value;
    this.candidat.formation.specialite_formation=this.value;
 }
}
