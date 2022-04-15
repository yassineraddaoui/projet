import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from 'src/app/Candidat';

@Component({
  selector: 'app-permis',
  templateUrl: './permis.component.html',
  styleUrls: ['./permis.component.css']
})
export class PermisComponent implements OnInit {
  @Input() candidat!:Candidat;
  constructor() { }

  ngOnInit() {
  }
  public onChange(event:any) {
    this.candidat.permis=event.target.value;
    console.log(this.candidat)
 }
}
