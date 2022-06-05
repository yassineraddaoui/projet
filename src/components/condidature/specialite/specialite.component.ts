import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/services/Candidat.service';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {
   a:string[]=new Array();
   sp:string[]=new Array();
   submitted=false;
   selected=""
  selectList=0;
  max =0;  
  list:any;
  currentUser!:any;
  constructor(private route: ActivatedRoute,private token: TokenStorageService,
    private router: Router,private candidatService:CandidatService ) { }

  ngOnInit() {
    if (!this.token.getToken()){
      this.router.navigate(['/login']);
    }
    this.currentUser = this.token.getUser();

    this.candidatService.getListSpécialité(this.currentUser.cin).subscribe(data=>{
      this.a=data;
    })
  }

  form = new FormGroup({
    post: new FormControl('', ),

  })
  get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onChange(event:any, x:number) {
      this.selected = event.target.value;
      this.selectList=x;
    }  
   add(){
     if (this.sp.length===2 ){
        this.max=1
      return;
     }
     if(this.selectList===1 && this.a.indexOf(this.selected)>-1){
      this.max=0;
      this.sp.push(this.selected);
      this.a.forEach((value: any,index: any)=>{
        if(value==this.selected) this.a.splice(index,1);
     });
   }
  }
   del(){
    if(this.selectList===2 && this.sp.indexOf(this.selected)>-1){
      this.a.push(this.selected);
      this.sp.forEach((value: any,index: any)=>{
        if(value==this.selected) this.sp.splice(index,1);
     });
   }
   console.log(this.sp)

   }
   onSubmit(): void {
     console.log(this.sp)
    this.submitted = true;
    if(this.sp.length<1)
      return;
   this.candidatService.choisirSpecialite(this.sp,this.currentUser.cin).subscribe(data=>console.log(data))
       this.router.navigate(['/pdf']);
 }
 
}
