import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;

  ngOnInit() {
  }
  
    
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
   
}
