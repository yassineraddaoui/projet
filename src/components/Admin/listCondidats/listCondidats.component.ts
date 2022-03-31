import { Component, OnInit } from '@angular/core';
import { Condidat } from 'src/app/condidat';
import { CondidatServiceService } from 'src/components/Admin/listCondidats/condidat-service.service'
@Component({
  selector: 'app-listCondidats',
  templateUrl: './listCondidats.component.html',
  styleUrls: ['./listCondidats.component.css']
})
export class ListCondidatsComponent implements OnInit {

  condidats!: Condidat[];
  constructor(private CondidatService: CondidatServiceService) { }

  ngOnInit() {
    this.getCondidats();
  }
private getCondidats() {
  this.CondidatService.getCondidatsList().subscribe(data => {
    this.condidats =data;
    console.log(data);
  });
}
}
