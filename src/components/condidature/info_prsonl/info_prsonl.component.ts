import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Candidat } from 'src/app/Candidat';

@Component({
  selector: 'app-info_prsonl',
  templateUrl: './info_prsonl.component.html',
  styleUrls: ['./info_prsonl.component.css']
})
export class Info_prsonlComponent implements OnInit {

  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() candidat!:Candidat;
  public etat!: string;

  constructor() { }

  ngOnInit() {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  changeSex(x: string):void {
    this.candidat.sexe=x;
  }
  public onChange(event:any) {
    const value = event.target.value;
    this.candidat.situation = value;
 }
}
