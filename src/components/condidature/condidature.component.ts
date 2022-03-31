import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Condidat } from 'src/app/condidat';
import { CondidatService } from '../Condidat.service';

@Component({
  selector: 'app-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css'],
  providers:[]
})
export class CondidatureComponent implements OnInit {

  condidat: Condidat=new Condidat();
  public etat!: string;
  niv= "1";
  submitted = false;


  constructor( private condidatService:CondidatService , private fb :FormBuilder) {
  
   }
   updateCandidat(){
  this.condidat.cin="4";
  console.log(this.condidat);
  this.condidatService.updateCandidat(this.condidat.cin,this.condidat).subscribe( data =>{
  console.log(data);
})
   }
  ngOnInit(): void {

    this.condidat.sexe='h';
    this.condidat.situation="Célibataire";
  }


  form = new FormGroup({
      pereNom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')],),
      perePrenom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')],),
      pereCIN: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]\d*$/)],),
      mereNom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')],),
      merePrenom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
      mereCIN: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]\d*$/)],),

      prenom:new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
      nom:new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
      dateNaiss:new FormControl('', [Validators.required]),
      lieu:new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
      dateCin:new FormControl('', [Validators.required]),
      rangCin:new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
      post:new FormControl('', [Validators.required]),  

      date:new FormControl('', [Validators.required]),  
      dateSup:new FormControl('', [Validators.required]),
      graduation:new FormControl('', [Validators.required]), 
      moy:new FormControl('', [Validators.required,Validators.max(20),Validators.min(0)]),  
      mail:new FormControl('', [Validators.required,Validators.email]),
      tel:new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
      postale:new FormControl('', [Validators.required]),

      epauxNom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')],),
      epauxPrenom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')],),
      epauxCIN: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]\d*$/)],),
      '0handicap':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
      '1handicap':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
      '2handicap':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
      '3handicap':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
      '4handicap':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)])
    ,'0cin'  :new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.minLength(8),Validators.maxLength(8)]),
    '1cin' :new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.minLength(8),Validators.maxLength(8)]),
    '2cin' :new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.minLength(8),Validators.maxLength(8)]),
    '3cin' :new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.minLength(8),Validators.maxLength(8)]),
    '4cin' :new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.minLength(8),Validators.maxLength(8)]),

    '0nom'  :new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
    '1nom' :new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
    '2nom':new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
    '3nom' :new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
    '4nom' :new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
    
    '0prenom'  :new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
    '1prenom' :new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
    '2prenom':new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
    '3prenom' :new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
    '4prenom' :new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),

    '0date'  :new FormControl('', [Validators.required]),
    '1date' :new FormControl('', [Validators.required,]),
    '2date':new FormControl('', [Validators.required]),
    '3date' :new FormControl('', [Validators.required]),
    '4date' :new FormControl('', [Validators.required]),

});
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
 
  public onChange(event:any) {
    const value = event.target.value;
    this.condidat.situation = value;
 }
 onSubmit(): void {
   this.updateCandidat();
   this.submitted = true;
   if (this.form.invalid) {
    return;
  }
}
changeSex(x: string):void {
  this.condidat.sexe=x;
}

}
