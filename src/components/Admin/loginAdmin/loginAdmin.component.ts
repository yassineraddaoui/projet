import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthAdminService } from 'src/app/services/authAdmin.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-loginAdmin',
  templateUrl: './loginAdmin.component.html',
  styleUrls: ['./loginAdmin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private auth:AuthAdminService,
    private router: Router,private tokenStorage: TokenStorageService){}
    matricule!:string;
    password!:string;
    isLoginFailed=false;
    sub=false;
    errorMessage!:string;
  ngOnInit(): void {
    if (this.tokenStorage.getToken())
      this.router.navigate(['/admin']);
  }
  loginForm = new FormGroup({
    matricule: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
    password: new FormControl('', [Validators.required])
  })

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.sub=true;
    if(this.loginForm.valid){
      this.auth.loginAdmin
      (this.matricule,this.password).subscribe(
        data => {
           this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          var currentUser = this.tokenStorage.getUser();
           if(currentUser.roles[0]==="ROLE_ADMIN")
            this.router.navigate(['/admin']);
            if(currentUser.roles[0]==='ROLE_MODERATOR')
            this.router.navigate(['/moderator']);
            // else 
            // this.router.navigate(['/condidature']);
            console.log(currentUser.roles[0])
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
  }
}
