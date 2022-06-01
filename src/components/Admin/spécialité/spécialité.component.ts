import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Specialite } from 'src/app/model/specialite';
import { AdminService } from 'src/app/services/adminService.service';

@Component({
  selector: 'app-spécialité',
  templateUrl: './spécialité.component.html',
  styleUrls: ['./spécialité.component.css']
})
export class SpécialitéComponent implements OnInit {
  sp!:any[];
  spResearch!:any[];
  x!:any;
  cap!:string;
  btp!:string;
  bts!:string;
  delegation="Belkhir";
  lib_specialite!: string;
  sub!:any;
  word!:any;
  sexe="h";
  permis="غير متحصل";
  constructor(private adminS:AdminService) { }
  form = new FormGroup({

  })
  listSp(){
    if(this.word===""|| this.word===undefined){
      this.spResearch=this.sp;
      return;
    }
    this.spResearch=[];
    for(var i of this.sp){
      if (i.lib_specialite.toUpperCase().startsWith(this.word.toUpperCase())){
        this.spResearch.push(i)
      }
    }
    console.log(this.spResearch)
  }

  ngOnInit() {
    this.adminS.getAllSp().subscribe(data=>{
      console.log(data);
      this.sp=data;
      this.spResearch=data;
    })
  }
  public onChangeP(event:any,i:number) {
    this.sp[i].permis=event.target.value  ;
 }
 public onChangeD(event:any,i:number) {
  this.sp[i].delegation=event.target.value  ;
}
public onChanges(event:any,i:number) {
  this.sp[i].sexe=event.target.value  ;
}



 public onChangeNp(event:any) {
  this.permis=event.target.value  ;

}
public onChangeNs(event:any) {
  this.sexe=event.target.value  ;

}

public onChangeNd(event:any) {
  this.delegation=event.target.value  ;

}

 modifierSp(index:number ,id:any){
   console.log(index,"fjdoqsf")
   console.log(this.sp[index])
  this.adminS.modifierSpécialité(this.sp[index],id).subscribe(data=>{
    console.log(data);
  })

 }
 deleteSp(id:string){
  for(var i=0;i<this.sp.length;i++){
    if(this.sp[i].id===id)
    this.sp.splice(i,1);
  }

   this.adminS.deleteSp(id).subscribe(data=>{
     console.log(data);
   })

 }
 addSp(){
   this.adminS.addSpécialité(new Specialite(this.delegation,this.cap,this.btp,this.bts,this.sexe,this.lib_specialite,this.permis)).subscribe(data =>{
     console.log(data);
     this.sp.push(new Specialite(this.delegation,this.cap,this.btp,this.bts,this.sexe,this.lib_specialite,this.permis)); 
    this.cap="";
    this.btp="";
    this.bts="";
    this.lib_specialite="";


    })
 }



 get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}

}

