import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Condidat } from 'src/app/condidat';
import { Handicap } from 'src/app/handicap';

@Component({
  selector: 'app-handicap',
  templateUrl: './handicap.component.html',
  styleUrls: ['./handicap.component.css']
})
export class HandicapComponent implements OnInit {
  selected =0;
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() condidat!: Condidat
  t = new Array(5);
  hf :Array<Handicap>=new Array();

  constructor() {
   
   }

  ngOnInit() {
    console.log(this.submitted=true);
    console.log(this.submitted==true);
    console.log(this.submitted);

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public onChange(event:any) {

    this.selected = +event.target.value ;
    this.hf.splice(0,this.hf.length);
    for(var i=0;i<this.selected;i++){
      this.hf.push(new Handicap);
    }

    if(this.submitted ===true){
      for(var j=0;j<this.selected;j++){
        if(this.hf[j].degre===undefined){
          this.hf[j].degre="1";
        }
      }
      this.condidat.hf=this.hf;
    }


  }
  
 count(length : number){
   return new Array(length);
 }
 public onChange2(event:any,i :number) {
   this.hf[i].degre= event.target.value;  
}

 

}
