import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/model/Candidat';
import { AdminService } from 'src/app/services/adminService.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-menuAdmin',
  templateUrl: './menuAdmin.component.html',
  styleUrls: ['./menuAdmin.component.css']
})
export class MenuAdminComponent implements OnInit {
  sub=false;
  candidats!: Candidat[];
  c!:Candidat[];
  candidat!: Candidat;
  word!:string;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.getCondidats();
  }
private getCondidats() {
  this.adminService.getAll().subscribe(data => {
    this.candidats =data;
    this.c=data
    console.log(data);
  });
}
  listCandidat(){
    console.log(this.word)
    if(this.word===""|| this.word===undefined){
      this.c=this.candidats;
      return;
    }
    this.c=[];
    for(var i of this.candidats){
      if (i.cin.startsWith(this.word)){
        this.c.push(i)
      }
    }
    console.log(this.c)
  }

  exportPDF(cin:string){
    this.adminService.pdfDownload(cin).subscribe(
      blob => saveAs(blob,cin+"candidature.pdf")
    );
  }
  exportPDFall(){
    this.adminService.getAllPDF().subscribe(
      blob => saveAs(blob,"listCandidats.pdf")
    );
  }

}
