import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/model/Candidat';
import { CondidatService } from 'src/app/services/Candidat.service';
@Component({
  selector: 'app-listCondidats',
  templateUrl: './listCondidats.component.html',
  styleUrls: ['./listCondidats.component.css']
})
export class ListCondidatsComponent implements OnInit {

  candidats!: Candidat[];
  constructor(private candidatService: CondidatService) { }

  ngOnInit() {
    this.getCondidats();
  }
private getCondidats() {
  this.candidatService.getAll().subscribe(data => {
    this.candidats =data;
    console.log(data);
  });
}
}
