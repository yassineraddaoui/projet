import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}


