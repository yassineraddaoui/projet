import { FamilleChomage } from "./FamilleChomage";
import { Handicap } from "./handicap";

export class Condidat {
    fc:Array<FamilleChomage> =new Array;
    hf:Array<Handicap>=new Array;
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
    perePrenom!:string;
    pereNom!:string; 
    pereCIN!:string; 
    mereNom!:string; 
    merePrenom!:string; 
    mereCIN!:string;
    delegation!:string;
    post!:string;  
    adresse!:string;
    date!:string; 
    dateSup!:string;
    graduation!:string; 
    moy!:string;
    mail!:string;
    tel!:string;
    postale!:string;
  
    epauxNom?: string;
    epauxPrenom?: string; 
    epauxCIN?: string; 
    '0cin'  ?: string;
    '1cin' ?: string;
    '2cin'?: string;
    '3cin' ?: string;
    '4cin' ?: string;
  
    '0nom' ?: string;
    '1nom' ?: string;
    '2nom'?: string;
    '3nom' ?: string;
    '4nom' ?: string;
    
    '0prenom'  ?: string;
    '1prenom' ?: string;
    '2prenom'?: string;
    '3prenom' ?: string;
    '4prenom' ?: string;
  
    '0date'  ?: string;
    '1date' ?: string;
    '2date'?: string;
    '3date' ?: string;
    '4date' ?: string;

  
}
