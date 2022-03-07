import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css']
})
export class CondidatureComponent implements OnInit {
  region ="Gafsa";
  cin ="15645463";
  deligation ="Metlaoui"
  public etat!: string;
  selected ='1';
  niv= "1";

  constructor() { }

  ngOnInit() {
    
  }
  submitted = false;

  form = new FormGroup({
  prenom:new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
  nom:new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
  dateNaiss:new FormControl('', [Validators.required]),
  lieu:new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
  dateCin:new FormControl('', [Validators.required]),
  rangCin:new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)])
  
  ,pereNom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')],),
  perePrenom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')],),
  pereCIN: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]\d*$/)],),
  mereNom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')],),
  merePrenom: new FormControl('', [Validators.required,Validators.pattern( '[a-zA-Z ]*')]),
  mereCIN: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]\d*$/)],),

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

  '0':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
  '1':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
  '2':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
  '3':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
  '4':new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]),

  '0cin'  :new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.minLength(8),Validators.maxLength(8)]),
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
    this.selected = value;
    console.log(this.selected);
 }
 onSubmit(): void {
  this.submitted = true;
  if (this.form.invalid) {
    return;
  }
  console.log(JSON.stringify(this.form.value, null, 2));
}


}
