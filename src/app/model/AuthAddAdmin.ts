export class AuthAddAdmin {
        matricule!:string;
        role!:string[];
        password!:string;
        
        constructor(mat:string,password:string,role:string[]){
            this.matricule=mat;
            this.password=password;
            this.role=role;
    
        }
}

