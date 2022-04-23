import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Candidat } from 'src/app/model/Candidat';
import { FamilleCouple } from 'src/app/model/FamilleCouple';

@Component({
  selector: 'app-marie',
  templateUrl: './marie.component.html',
  styleUrls: ['./marie.component.css']
})
export class MarieComponent implements OnInit {
  @Input() form!:FormGroup;
  @Input() submitted!:boolean;
  @Input() candidat!:Candidat;
  constructor() { }

  ngOnInit() {
    if(this.candidat.familleCouple===null)
    this.candidat.familleCouple= new FamilleCouple();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}