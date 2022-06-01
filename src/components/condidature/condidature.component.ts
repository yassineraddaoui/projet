import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Candidat } from 'src/app/model/Candidat';
import { CandidatService } from 'src/app/services/Candidat.service';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css'],
  providers:[]
})
export class CondidatureComponent implements OnInit {

  candidat: Candidat=new Candidat();
  oldCandidat: Candidat=new Candidat();
  list:any;
  niv= "1";
  submitted = false;
  currentUser: any;
  constructor( private route: ActivatedRoute,
    private router: Router,private token: TokenStorageService,private candidatService:CandidatService) {
   }
  updateCandidat(){
  console.log(this.candidat);
  this.candidatService.updateCandidat("5",this.candidat).subscribe(data =>{
  console.log(data);
  });
}

  ngOnInit(): void {
    if (!this.token.getToken()){
      this.router.navigate(['/login']);
    }

    this.currentUser = this.token.getUser();
   this.candidatService.getCandidat("5").subscribe(
     data=>{
      this.oldCandidat=data;  
      console.log(this.oldCandidat)  
      if(this.oldCandidat.prenom!==null)
        this.candidat.prenom=this.oldCandidat.prenom;

      if(this.oldCandidat.parent!==null)
         this.candidat.parent=this.oldCandidat.parent;

      if(this.oldCandidat.nom!==null)
        this.candidat.nom=this.oldCandidat.nom;
        if(this.oldCandidat.tel!==null)
        this.candidat.tel=this.oldCandidat.tel;

        if(this.oldCandidat.dateCin!==null)
        this.candidat.dateCin=this.oldCandidat.dateCin.substr(0,10);
        if(this.oldCandidat.permis!==null)
        this.candidat.permis=this.oldCandidat.permis

        if(this.oldCandidat.rangCin!==null)
        this.candidat.rangCin=this.oldCandidat.rangCin;

        if(this.oldCandidat.dateNaiss!==null)
        this.candidat.dateNaiss=this.oldCandidat.dateNaiss.substr(0,10);

        if(this.oldCandidat.adresse!==null)
        this.candidat.adresse=this.oldCandidat.adresse;

        if(this.oldCandidat.familleCouple!==null)
        this.candidat.familleCouple=this.oldCandidat.familleCouple;

        if(this.oldCandidat.situation!==null)
        this.candidat.situation=this.oldCandidat.situation;
        if(this.oldCandidat.sexe===null)
        this.candidat.situation="h";

        if(this.oldCandidat.sexe!==null)
        this.candidat.sexe=this.oldCandidat.sexe;

        if(this.oldCandidat.mail!==null)
        this.candidat.mail=this.oldCandidat.mail;

        if(this.oldCandidat.fc!==null)
        this.candidat.fc=this.oldCandidat.fc;

        if(this.oldCandidat.hf!==null)
        this.candidat.hf=this.oldCandidat.hf;
        
       

        if(this.oldCandidat.lieuNaiss!==null)
        this.candidat.lieuNaiss=this.oldCandidat.lieuNaiss;

        if(this.oldCandidat.niveauEtude!==null){
          this.candidat.niveauEtude=this.oldCandidat.niveauEtude;
          this.candidat.niveauEtude.date_rupture=this.oldCandidat.niveauEtude.date_rupture.substr(0,10);
        
          if(this.oldCandidat.formation!==null){
          this.candidat.formation=this.oldCandidat.formation;
          this.candidat.formation.date_diplome_formation=this.oldCandidat.formation.date_diplome_formation.substr(0,10)
        }
          if(this.oldCandidat.niveauSuperieur!==null){
          this.candidat.niveauSuperieur=this.oldCandidat.niveauSuperieur;
          this.candidat.niveauSuperieur.date_diplome=this.candidat.niveauSuperieur.date_diplome.substr(0,10);
        
        }
      }
        if (this.oldCandidat.fc!==null){
          this.candidat.fc=this.oldCandidat.fc;
          for(var i=0;i<this.candidat.fc.length;i++){
            this.candidat.fc[i].date_naissance_chomeur
            =this.candidat.fc[i].date_naissance_chomeur.substr(0,10);
          }
        }

      });
    this.candidat.cin="4";

  }
  logOut(){
    this.token.signOut();
  }
  getList() {
    console.log(this.candidat.permis);
    return this.candidatService.getListSpécialité(this.candidat.permis).subscribe(data=>{
      this.list=data;
    });  
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
  
  
 onSubmit(): void {
   this.updateCandidat();
   this.submitted = true;
   if (this.form.invalid) {
    return;
  }
}


}
