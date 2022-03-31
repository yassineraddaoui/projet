import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Condidat } from 'src/app/condidat';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    if(this.submitted){
      
    }
  }
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() condidat!:Condidat;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

}


