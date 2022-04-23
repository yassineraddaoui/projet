import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Candidat } from 'src/app/model/Candidat';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() candidat!:Candidat;
  constructor() { }

  ngOnInit() {
  }

}
