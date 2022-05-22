export class Admin {
    matricule!:string;
    role!:string[];
    password!:string;
    nom!:string;
    prenom!:string;
    constructor(mat:string,password:string,role:string[]){
        this.matricule=mat;
        this.password==password;
        this.role=role;

    }
}
