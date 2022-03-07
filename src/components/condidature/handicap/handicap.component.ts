import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-handicap',
  templateUrl: './handicap.component.html',
  styleUrls: ['./handicap.component.css']
})
export class HandicapComponent implements OnInit {
  selected =0;
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
    this.selected = +value ;
    console.log(this.selected);
 }
  
 count(length : number){
   return new Array(length);
 }

}
