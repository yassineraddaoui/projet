import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor() { }
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;

  ngOnInit() {
  }

    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
}
