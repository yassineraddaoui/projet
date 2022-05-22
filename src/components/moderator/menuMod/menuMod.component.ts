import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/model/Candidat';
import { AdminService } from 'src/app/services/adminService.service';
import { saveAs } from 'file-saver';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menuMod',
  templateUrl: './menuMod.component.html',
  styleUrls: ['./menuModcomponent.css']
})
export class MenuModComponent implements OnInit {
  sub=false;
  candidats!: Candidat[];
  c!:Candidat[];
  candidat!: Candidat;
  word!:string;
  constructor(private adminService:AdminService,private router: Router,private tokenStorage: TokenStorageService ) { }

  ngOnInit() {
    if (!this.tokenStorage.getToken()){
      this.router.navigate(['/admin/login']);
    }
    this.getCondidats();
  }
private getCondidats() {
  this.adminService.getAll().subscribe(data => {
    this.candidats =data;
    this.c=data
  });
}
  listCandidat(){
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
