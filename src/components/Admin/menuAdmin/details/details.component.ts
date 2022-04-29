import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from 'src/app/model/Candidat';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 @Input() c!:Candidat; 
 @Input() sub!:boolean;
  constructor() { }

  ngOnInit() {
  }
  exit(){
    this.sub=false;
    console.log(this.sub)
  }
}
