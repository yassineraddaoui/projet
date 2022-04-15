import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Candidat } from 'src/app/Candidat';
import { CondidatService } from 'src/components/Candidat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
  item ='1';
  error=0;
  candidat: Candidat=new Candidat();
  constructor(private candidatService:CondidatService) { }
  
  ngOnInit() {
    this.candidat.delegation="Belkhir";
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

      this.addCandidat()
  }
  
  receiveitem($event: string ) {  
    this.item = $event;  
    } 
  changeDel( x: string){
    this.candidat.delegation=x;
    }
  addCandidat(){
    this.candidatService.addCandidat(this.candidat).subscribe(data =>{
      console.log(data);
    })
  }

}
