import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-superieur',
  templateUrl: './supérieur.component.html',
  styleUrls: ['./supérieur.component.css']
})
export class SupérieurComponent implements OnInit {
  selected: any;
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;

  constructor() { }

  ngOnInit() {
  }
  
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onChange(event:any) {
      const value = event.target.value;
      this.selected = value;
   }
}
