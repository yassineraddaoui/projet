import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() item = 'inscription';
  choix!:number;

  constructor() { }

  ngOnInit() {
  }
  
  @Output() itemEmitter = new EventEmitter < string  > ();  
    PostData(x: string ) {  
        this.itemEmitter.emit(x);  
    }  

  }


