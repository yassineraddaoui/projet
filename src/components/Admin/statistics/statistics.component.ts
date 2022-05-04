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
      this.calcNiveau();
      this.calcData();
      this.calcDelegation();
    });
  }
  listCandidat:Array<Candidat>=new Array;
  permisA=0;
  permisB=0;
  permisC=0;
  permisD=0;
  permisE=0;

  sansPermis=0;
  m=0;
  f=0;
  maried=0;;
  divorced=0;
  single=0;
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
  DataGenderNivW=[0,0,0,0];
  DataGenderNiv=[0,0,0,0];

  calcDelegation(){
    for (var  i of this.listCandidat){
      
      if(i.delegation==="Belkhir"){
      this.belkhir++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[0]++
      else
      this.DelegationDataGenderValueW[0]++
    }
      else if(i.delegation==="El Guettar"){
      this.guettar++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[1]++
      else
      this.DelegationDataGenderValueW[1]++
      }
      else if(i.delegation==="Gafsa Sud"){
      this.sud++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[2]++
      else
      this.DelegationDataGenderValueW[2]++
    }
      else if(i.delegation==="Mdhilla"){
      this.mdhilla++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[3]++
      else
      this.DelegationDataGenderValueW[3]++
    }
      else if(i.delegation==="Metlaoui"){
      this.metlaoui++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[4]++
      else
      this.DelegationDataGenderValueW[4]++
    }
      else if(i.delegation==="Moularès"){
      this.moulares++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[5]++
      else
      this.DelegationDataGenderValueW[5]++
    }
      else if(i.delegation==="El Sened"){
      this.sened++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[6]++
      else
      this.DelegationDataGenderValueW[6]++
    }
      else if(i.delegation==="Redeyef"){
      this.redeyef++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[7]++
      else
      this.DelegationDataGenderValueW[7]++
    }
      else if(i.delegation==="Sidi Aïch"){
      this.sidiaich++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[8]++
      else
      this.DelegationDataGenderValueW[8]++
    }
      else if(i.delegation==="Gafsa Nord"){
      this.nord++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[9]++
      else
      this.DelegationDataGenderValueW[9]++
    
    }
      else if(i.delegation==="El Ksar"){
      this.ksar++;
      if(i.sexe==="M")
      this.DelegationDataGenderValue[10]++
      else
      this.DelegationDataGenderValueW[10]++
    }
    }
    this.DelegationData= [
      {
        "name": "El Guettar",
        "value": this.guettar
      },
      {
        "name": "Gafsa Sud",
        "value": this.sud
      },
      {
        "name": "Mdhilla",
        "value": this.mdhilla
      },
      {
        "name": "Belkhir",
        "value": this.belkhir
      },
      {
        "name": "Metlaoui",
        "value": this.metlaoui
      },
      {
        "name": "Moularès",
        "value": this.moulares
      },
      {
        "name": "Sened",
        "value": this.sened
      },
      {
        "name": "Redeyef",
        "value": this.redeyef
      },
      {
        "name": "Sidi Aïch",
        "value": this.sidiaich
      },
      {
        "name": "Gafsa Nord",
        "value": this.nord
      },
      {
        "name": "El Ksar",
        "value": this.ksar
      }
    ];
    this.DelegationDataGender=[
      {
        "name": "Belkhir",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[0]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[0]
          }
        ]
      },
      {
        "name": "El Guettar",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[1]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[1]
          }
        ]
      },
      {
        "name": "Gafsa Sud",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[2]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[2]
          }
        ]
      },
      {
        "name": "Mdhilla",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[3]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[3]
          }
        ]
      },
      {
        "name": "Metlaoui",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[4]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[4]
          }
        ]
      },
      {
        "name": "Moularès",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[5]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[5]
          }
        ]
      },
      {
        "name": "El Sened",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[6]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[6]
          }
        ]
      },
      {
        "name": "Redeyef",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[7]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[7]
          }
        ]
      },
      {
        "name": "Sidi Aïch",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[8]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[8]
          }
        ]
      },
      {
        "name": "Gafsa Nord",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[9]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[9]
          }
        ]
      },
      {
        "name": "El Ksar",
        "series": [
          {
            "name": "Man",
            "value": this.DelegationDataGenderValue[10]
          }, {
            "name": "Women",
            "value": this.DelegationDataGenderValueW[10]
          }
        ]
      },
    ]  }
  calcData(){
    this.m=0;
    this.f=0;
    for(var i of this.listCandidat){
      if(i.sexe==="M")
        this.m=this.m+1;
      else 
        this.f=this.f+1;

      if(i.situation==="Célibataire")
        this.single++
      else if(i.situation==="Marié")
        this.maried++;
        else
        this.divorced++;

      if(i.permis==='غير متحصل')
        this.sansPermis++
        else if( i.permis==="صنف  أ")
          this.permisA++;
          else if( i.permis==="صنف  ب")
          this.permisB++;
          else if( i.permis==="صنف  ج+هـ")
          this.permisC++;
          else
          this.permisD++;

    }
    this.genderData = [
      {
        "name": "Man",
        "value": this.m
      }, {
        "name": "Women",
        "value": this.f
      }
    ];
    this.situationData =[
      {
        "name":"Célibataire",
        value:this.single
      },{
        "name":"Marié",
         value:this.maried
      },{
        "name":"Divorcé",
         value:this.divorced
      } 
    ];
    this.permisData =[
      {
        "name":"Permis A1",
        value:this.permisA
      },{
        "name":"Permis A",
         value:this.permisB
      },{
        "name":"Permis B",
         value:this.permisC
      }, {
        "name":"Permis B+E",
        value:this.permisD
      } ,
      {
        "name":"Sans Permis",
        value:this.sansPermis
      }
    ];
  }
  calcNiveau(){
    for(var i of this.listCandidat){
      if(i.niveauEtude.niveau_candidat==="Superieur"){
      this.superieur++;
      if(i.sexe==="M")
      this.DataGenderNiv[0]++
      else
      this.DataGenderNivW[0]++
    }
      else if(i.niveauEtude.niveau_candidat==="Primaire"){
      this.primaire++;
      if(i.sexe==="M")
      this.DataGenderNiv[1]++
      else
      this.DataGenderNivW[1]++
    }
      else if(i.niveauEtude.niveau_candidat==="Secondaire"){
      this.secondaire++;
      if(i.sexe==="M")
      this.DataGenderNiv[2]++
      else
      this.DataGenderNivW[2]++
    }
      else if(i.niveauEtude.niveau_candidat==="Formation Professionnelle"){
      this.formation++;
      if(i.sexe==="M")
      this.DataGenderNiv[3]++
      else
      this.DataGenderNivW[3]++
      }
    }this.NivDataGender=[
      {
        "name": "Superieur",
        "series": [
          {
            "name": "Man",
            "value": this.DataGenderNiv[0]
          }, {
            "name": "Women",
            "value": this.DataGenderNivW[0]
          }
        ]
      },
      {
        "name": "Primaire",
        "series": [
          {
            "name": "Man",
            "value": this.DataGenderNiv[1]
          }, {
            "name": "Women",
            "value": this.DataGenderNivW[1]
          }
        ]
      },
      {
        "name": "Secondaire",
        "series": [
          {
            "name": "Man",
            "value": this.DataGenderNiv[2]
          }, {
            "name": "Women",
            "value": this.DataGenderNivW[2]
          }
        ]
      },
      {
        "name": "Formation Professionnelle",
        "series": [
          {
            "name": "Man",
            "value": this.DataGenderNiv[3]
          }, {
            "name": "Women",
            "value": this.DataGenderNivW[3]
          }
        ]
      },

    ];

    this.NiveauData= [
      {
        "name": "Formation Professionnelle",
        "value": this.formation
      },
      {
        "name": "Secondaire",
        "value": this.secondaire
      },
      {
        "name": "Primaire",
        "value": this.primaire
      },
      {
        "name": "Superieur",
        "value": this.superieur
      }
    ];
  }
  DelegationData= [
    {
      "name": "El Guettar",
      "value": this.guettar
    }
  ];
  NiveauData= [
    {
      "name": "Formation Professionnelle",
      "value": this.formation
    }
  ];

  genderData = [
    {
      "name": "Man",
      "value": this.m
    }
  ];
  situationData = [
    {
      "name": "Célibataire",
      "value": this.m
    }
  ];
  DelegationDataGenderValueW=[0,0,0,0,0,0,0,0,0,0,0];
  DelegationDataGenderValue=[0,0,0,0,0,0,0,0,0,0,0];
  DelegationDataGender=[
    {
      "name": "Belkhir",
      "series": [
        {
          "name": "Man",
          "value": this.DelegationDataGenderValue[0]
        }, {
          "name": "Women",
          "value": this.DelegationDataGenderValueW[0]
        }
      ]
    }];
    NivDataGender=[
      {
        "name": "Superieur",
        "series": [
          {
            "name": "Man",
            "value": this.DataGenderNiv[0]
          }
        ]
      }];
      permisData=[
        {
          "name": "Permis A",
          "value": this.permisA
        }
      ];

}