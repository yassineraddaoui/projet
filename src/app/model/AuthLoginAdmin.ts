export class AuthLoginAdmin {
    matricule!:string;
    password!:string;
    constructor(matricule:string,password:string){
        this.matricule=matricule;
        this.password=password;
    }
}
