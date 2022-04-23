import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Candidat } from 'src/app/model/Candidat';
import { Handicap } from 'src/app/model/handicap';
@Component({
  selector: 'app-handicap',
  templateUrl: './handicap.component.html',
  styleUrls: ['./handicap.component.css']
})
export class HandicapComponent implements OnInit {
  selected =0;
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() candidat!: Candidat
  constructor() {}
  ngOnInit() {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  changeSize(){
    if(this.candidat.hf.length>this.selected)
    this.candidat.hf.splice(this.selected,this.candidat.hf.length);  
    if(this.candidat.hf.length<this.selected)
    for(var i=0;i<this.selected-this.candidat.hf.length+1;i++){
      this.candidat.hf.push(new Handicap);
      this.candidat.hf[i].degre='1';
    }
  }
  public onChange(event:any) {
    this.selected = +event.target.value ;
}
   public onChange2(event:any,i :number) {
      this.candidat.hf[i].degre= event.target.value;  
  }
}