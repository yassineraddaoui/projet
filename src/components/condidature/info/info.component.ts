import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Condidat } from 'src/app/condidat';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() condidat!:Condidat;
  constructor() { }

  ngOnInit() {
  }

}
