import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Candidat } from 'src/app/Candidat';
import { NiveauEtude } from 'src/app/NiveauEtude';
import { NiveauSuperieur } from 'src/app/NiveauSuperieur';
import { CondidatService } from '../Candidat.service';
import { HandicapService } from '../handicap.service';

@Component({
  selector: 'app-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css'],
  providers:[]
})
export class CondidatureComponent implements OnInit {

  candidat: Candidat=new Candidat();

  public etat!: string;
  niv= "1";
  submitted = false;
  constructor( private candidatService:CondidatService,private handicapService: HandicapService) {
  
   }
  updateCandidat(){
  console.log(this.candidat);
  this.candidatService.updateCandidat("4",this.candidat).subscribe(data =>{
  console.log(data);
  });
}

  ngOnInit(): void {
   this.candidatService.getCandidat("4").subscribe(
     data=>{
       this.candidat=data;
       this.candidat.dateNaiss=this.candidat.dateNaiss.substr(0,10);
       this.candidat.dateCin=this.candidat.dateCin.substr(0,10);
       this.candidat.niveauEtude.date_rupture=this.candidat.niveauEtude.date_rupture.substr(0,10);
       this.candidat.niveauSuperieur.date_diplome=this.candidat.niveauSuperieur.date_diplome.substr(0,10);
       if(this.candidat.niveauEtude===null|| this.candidat.niveauEtude===undefined ){
        this.candidat.niveauEtude=new NiveauEtude();
        this.candidat.niveauSuperieur=new NiveauSuperieur();
        this.candidat.niveauEtude.niveau_candidat="Superieur";
        this.candidat.niveauEtude.specialite_etude="Lettres";
        this.candidat.niveauSuperieur.diplome="اجازة";
        this.candidat.niveauSuperieur.specialite="1";
      }
      console.log(this.candidat);
      });
    this.candidat.cin="4";
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
    this.candidat.situation = value;
 }
 onSubmit(): void {
   this.updateCandidat();
   this.submitted = true;
   if (this.form.invalid) {
    return;
  }
}
changeSex(x: string):void {
  console.log(typeof( this.candidat))
  this.candidat.sexe=x;
}

}
