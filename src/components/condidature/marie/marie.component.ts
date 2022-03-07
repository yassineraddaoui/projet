import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-marie',
  templateUrl: './marie.component.html',
  styleUrls: ['./marie.component.css']
})
export class MarieComponent implements OnInit {
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;

  constructor() { }

  ngOnInit() {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}