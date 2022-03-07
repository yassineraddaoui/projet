import { Component, Injectable, OnInit } from "@angular/core";
import { table } from "console";
@Injectable()
  export default class Condidat implements OnInit{
    nom!: string;
    prenom!: string;
    cin!: string;
    num!: string;
    static tab=[];
    ngOnInit() {
    }
    constructor(){
        Condidat.tab.push()
    }
    listCondidat(){
        return Condidat.tab;
    }

  
    
}