import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Candidat } from 'src/app/model/Candidat';
import { FamilleChomage } from 'src/app/model/FamilleChomage';

@Component({
  selector: 'app-frere',
  templateUrl: './frere.component.html',
  styleUrls: ['./frere.component.css']
})
export class FrereComponent implements OnInit {
  selected=0;
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() candidat!:Candidat;
  fc :Array<FamilleChomage>=new Array();

  constructor() { }

  ngOnInit() {
  }
 ;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public onChange(event:any) {
    this.selected = +event.target.value ;
    this.fc.splice(0,this.fc.length);
    for(var i=0;i<this.selected;i++){
      this.fc.push(new FamilleChomage);
    }
    this.candidat.fc=this.fc;
 }
 count(length : number){
  return new Array(length);
}
}
