import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/model/Candidat';
import { CandidatService } from 'src/app/services/Candidat.service';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-pdfCondidature',
  templateUrl: './pdfCondidature.component.html',
  styleUrls: ['./pdfCondidature.component.css']
})
export class PdfCondidatureComponent implements OnInit {
   candidat:Candidat=new Candidat()

  constructor(private token: TokenStorageService,private candidatService:CandidatService) { }

  ngOnInit() {
    this.candidat.cin="4";
    // this.candidatService.pdfDownload(this.candidat);
  }
  downloadPDF(){
    console.log(this.candidat.cin);
    //this.candidatService.pdfDownload(this.token.getUser());
    this.candidatService.pdfDownload("4").subscribe(
      blob => saveAs(blob,"candidature.pdf")
    );
  }
}
