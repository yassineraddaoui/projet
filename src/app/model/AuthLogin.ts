export class AuthLogin {
    cin!:string;
    code!:string;
    delegation!: string;
    constructor(cin:string,delegation:string,code:string){
        this.cin=cin;
        this.code=code;
        this.delegation=delegation;
    }
}
