import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {
  selected="1";
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
   @Output() selectedEmitter = new EventEmitter <string > ();  
    PostData() {  
        this.selectedEmitter.emit(this.selected); 
        console.log(this.selected) ;
    }    

}

