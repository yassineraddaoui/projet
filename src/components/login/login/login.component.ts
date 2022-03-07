import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  item ='1';
  constructor() { }

  ngOnInit() {
  }
  form = new FormGroup({
    cin: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]\d*$/)
  ], ),
    Delegation: new FormControl('', Validators.required),
    inscription:new FormControl('', [Validators.required])


  });
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(){

  }
  receiveitem($event: string ) {  
    this.item = $event;  
    } 
}
