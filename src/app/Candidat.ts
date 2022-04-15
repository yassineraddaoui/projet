import { ParseTemplateOptions } from "@angular/compiler";
import { FamilleChomage } from "./FamilleChomage";
import { FamilleCouple } from "./FamilleCouple";
import { Formation } from "./Formation";
import { Handicap } from "./handicap";
import { NiveauEtude } from "./NiveauEtude";
import { NiveauSuperieur } from "./NiveauSuperieur";
import { Parent } from "./Parent";

export class Candidat {
    fc:Array<FamilleChomage> =new Array;
    hf:Array<Handicap>=new Array;
    familleCouple!:FamilleCouple;
    niveauEtude=new NiveauEtude;
    formation=new Formation;
    niveauSuperieur=new NiveauSuperieur;
    parent=new Parent;
    situation!:string;
    prenom!:string;
    nom!:string;
    id!:string;
    cin!:string;
    code!:string;
    dateNaiss!:string;
    lieuNaiss!:string;
    dateCin!:string;
    rangCin!:number;
    sexe!:string;
    delegation!:string;
    post!:string;  
    adresse!:string;
    graduation!:string; 
    moy!:string;
    mail!:string;
    tel!:string;
    postale!:string;
    permis!:string;


  
}
