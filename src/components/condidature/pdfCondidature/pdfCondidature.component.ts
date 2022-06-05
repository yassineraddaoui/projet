import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/model/Candidat';
import { CandidatService } from 'src/app/services/Candidat.service';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdfCondidature',
  templateUrl: './pdfCondidature.component.html',
  styleUrls: ['./pdfCondidature.component.css']
})
export class PdfCondidatureComponent implements OnInit {
   candidat:Candidat=new Candidat()
   currentUser!:any;
  constructor(private token: TokenStorageService,private router: Router,private candidatService:CandidatService) { }

  ngOnInit() {
    if (!this.token.getToken()){
      this.router.navigate(['/login']);
    }
    this.currentUser = this.token.getUser();
  }
  downloadPDF(){
    this.candidatService.pdfDownload(this.currentUser.cin).subscribe(
      blob => saveAs(blob,"candidature.pdf")
    );
  }
}
