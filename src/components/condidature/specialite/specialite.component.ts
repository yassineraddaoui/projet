import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Candidat } from 'src/app/model/Candidat';
import { CandidatService } from 'src/app/services/Candidat.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {
   a:string[] = new Array() ;
   bx:string[] = new Array ;
  selected=""
  selectList=0;
  max =0;  
  list:any;
  constructor(private candidatService:CandidatService ) { }
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;

  ngOnInit() {
  }

    
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onChange(event:any, x:number) {
      this.selected = event.target.value;
      this.selectList=x;
    }  
   add(){
     if (this.bx.length===2 ){
        this.max=1
      return;
     }
     if(this.selectList===1 && this.a.indexOf(this.selected)>-1){
      this.max=0;
      this.bx.push(this.selected);
      this.a.forEach((value: any,index: any)=>{
        if(value==this.selected) this.a.splice(index,1);
     });
   }
  }
   del(){
    if(this.selectList===2 && this.bx.indexOf(this.selected)>-1){
      this.a.push(this.selected);
      this.bx.forEach((value: any,index: any)=>{
        if(value==this.selected) this.bx.splice(index,1);
     });
   }

   }
}
