import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/model/Candidat';
import { AdminService } from 'src/app/services/adminService.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  constructor(private service :AdminService){}
  ngOnInit(): void {
    this.service.getAll().subscribe(data=>{
      console.log(data)
      this.listCandidat=data;
      this.dataNiv=this.calcNiveau();
      this.dataSx=this.calcSx();
      this.dataDl=this.calcDelegation();
      this.datax=[this.m,this.f]
     console.log(this.dataNiv)
 
    });
  }
datax:any
  dataNiv:any
  dataSx:any
  dataDl:any
  listCandidat:Array<Candidat>=new Array;
  m=0;
  f=0;
  formation=0;
  superieur=0;
  primaire=0;
  secondaire=0;
  belkhir=0
  guettar=0
  ksar=0
  nord=0
  sud=0
  mdhilla=0
  metlaoui=0
  moulares=0
  sened=0;
  redeyef=0;
  sidiaich=0;
  calcDelegation(){
    for (var  i of this.listCandidat){
      if(i.delegation==="Belkhir")
      this.belkhir++;
      else if(i.delegation==="El Guettar")
      this.guettar++;
      else if(i.delegation==="Gafsa Sud")
      this.sud++;
      else if(i.delegation==="Mdhilla")
      this.mdhilla++;
      else if(i.delegation==="Metlaoui")
      this.metlaoui++;
      else if(i.delegation==="Moularès")
      this.moulares++;
      else if(i.delegation==="El Sened")
      this.sened++;
      else if(i.delegation==="Redeyef")
      this.redeyef++;
      else if(i.delegation==="Sidi Aïch")
      this.sidiaich++;
      else if(i.delegation==="Gafsa Nord")
      this.nord++;
      else if(i.delegation==="El Ksar")
      this.ksar++;
    }
      const dataDelegation = [
        {"axe": "Belkhir", "quantite": this.belkhir,"axe2":"2017"},
        {"axe": "El Guettar", "quantite": this.guettar,"axe2":"2015"},
        {"axe": "El Ksar", "quantite": this.ksar,"axe2":"2014"},
        {"axe": "Gafsa Nord", "quantite": this.nord,"axe2":"2012"},
        {"axe": "Gafsa Sud", "quantite": this.sud,"axe2":"2012"},
        {"axe": "Mdhilla", "quantite": this.mdhilla,"axe2":"2012"},
        {"axe": "Metlaoui", "quantite": this.metlaoui,"axe2":"2012"},
        {"axe": "Moularès", "quantite": this.moulares,"axe2":"2012"},
        {"axe": "Sened", "quantite": this.sened,"axe2":"2012"},
        {"axe": "Redeyef", "quantite": this.redeyef,"axe2":"2012"},
        {"axe": "Sidi Aïch", "quantite": this.sidiaich,"axe2":"2012"},
      ];
      return dataDelegation; 
  }
  calcSx(): any{
    this.m=0;
    this.f=0;
    for(var i of this.listCandidat){
      if(i.sexe==="M")
        this.m=this.m+1;
      else 
        this.f=this.f+1;
    }
    const dataSx = [
          {"axe": "Man", "quantite": this.m,"axe2":""},
          {"axe": "Women", "quantite": this.f,"axe2":""},
    ];

    console.log(this.m);console.log(this.f);
    return dataSx;
  }
  calcNiveau() :any{
    for(var i of this.listCandidat){
      if(i.sexe==="Superieur")
      this.superieur++;
      else if(i.niveauEtude.niveau_candidat==="Primaire")
      this.primaire++;
      else if(i.niveauEtude.niveau_candidat==="Secondaire")
      this.secondaire++;
      else if(i.niveauEtude.niveau_candidat==="Formation Professionnelle")
      this.formation++;
    }
    const dataNiv =[
      {"axe":"Superieur","quantite":this.superieur,axe2:""},
      {"axe":"Secondaire","quantite":this.secondaire,axe2:""},
      {"axe":"Primaire","quantite":this.primaire,axe2:""},
      {"axe":"Formation ","quantite":this.formation,axe2:""}
    ];
    return dataNiv;
  }
}