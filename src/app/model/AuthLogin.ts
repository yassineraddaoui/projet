export class AuthLogin {
    cin!:string;
    password!:string;
    delegation!: string;
    constructor(cin:string,delegation:string,password:string){
        this.cin=cin;
        this.password=password;
        this.delegation=delegation;
    }
}
