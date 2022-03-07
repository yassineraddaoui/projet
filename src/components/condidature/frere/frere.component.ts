import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-frere',
  templateUrl: './frere.component.html',
  styleUrls: ['./frere.component.css']
})
export class FrereComponent implements OnInit {
  selected=0;
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;

  constructor() { }

  ngOnInit() {
  }
 ;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public onChange(event:any) {
    const value = event.target.value;
    this.selected = +value ;
    console.log(this.selected);
 }
 count(length : number){
  return new Array(length);
}
}
