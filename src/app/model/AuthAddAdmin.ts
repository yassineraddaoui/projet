export class AuthAddAdmin {
    mat!:string;
    password!:string;
    role!:string;
    constructor(mat:string,role:string,password:string){
        this.mat=mat;
        this.password=password;
        this.role=role;
    }
}
