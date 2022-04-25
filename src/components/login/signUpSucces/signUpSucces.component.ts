import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signUpSucces',
  templateUrl: './signUpSucces.component.html',
  styleUrls: ['./signUpSucces.component.css']
})
export class SignUpSuccesComponent implements OnInit {
@Input() password!:string;
  constructor() { }

  ngOnInit() {
    console.log(this.password)
  }

}
