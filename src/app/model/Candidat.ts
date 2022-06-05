import { FamilleChomage } from "./FamilleChomage";
import { FamilleCouple } from "./FamilleCouple";
import { Formation } from "./Formation";
import { Handicap } from "./handicap";
import { NiveauEtude } from "./NiveauEtude";
import { NiveauSuperieur } from "./NiveauSuperieur";
import { Parent } from "./Parent";

export class Candidat {
    sp:string[] =new Array();
    fc:Array<FamilleChomage> =new Array;
    hf:Array<Handicap>=new Array;
    familleCouple = new FamilleCouple;
    niveauEtude=new NiveauEtude("Superieur");
    formation=new Formation("BTP","اللحام والتركيب");
    niveauSuperieur=  new NiveauSuperieur("اجازة",'1');
    parent=new Parent;
    situation="Célibataire"
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
    delegation="Belkhir";
    post!:string;  
    adresse!:string;
    graduation!:string; 
    moy!:string;
    mail!:string;
    tel!:string;
    postale!:string;
    permis!:string;
}
