import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Condidat } from 'src/app/condidat';
import { CondidatService } from 'src/components/Condidat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
  item ='1';
  error=0;
  condidat: Condidat=new Condidat();
  constructor(private condidatService:CondidatService) { }
  
  ngOnInit() {
    this.condidat.delegation="Belkhir";
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

      this.addCondidat()
  }
  
  receiveitem($event: string ) {  
    this.item = $event;  
    } 
  changeDel( x: string){
    this.condidat.delegation=x;
    }
  addCondidat(){
    this.condidatService.addCondidat(this.condidat).subscribe(data =>{
      console.log(data);
    })
  }

}
