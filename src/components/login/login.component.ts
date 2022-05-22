import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLogin } from 'src/app/model/AuthLogin';
import { AuthSignUp } from 'src/app/model/AuthSignUp';
import { AuthService } from 'src/app/services/Auth.service';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
  item ='inscription';
  error=0;
  code="";
  delegation="";
  cin=""
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  signUpSuccessful = false;
  isSignUpFailed = false;
  password="";
  roles: string[] = [];
  sub=false;
  constructor(    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService, private tokenStorage: TokenStorageService) { }
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['/condidature']);
    }

  }
  form = new FormGroup({
    cin: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]\d*$/)
  ], ),
    Delegation: new FormControl('', Validators.required),
    password:new FormControl('', [Validators.required])


  });
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(){
    this.sub=true;
    if(!this.form.valid){
      if(this.item==='login')
      this.authService.login
      (new AuthLogin(this.cin,this.delegation,this.code)).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          // if(this.roles[0]==="ROLE_ADMIN")
          // this.router.navigate(['/admin']);
          // this.router.navigate(['/condidature']);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
        else{
     
          this.authService.register
          (new AuthSignUp(this.cin,this.delegation)).subscribe(
            response  => {
              this.password=response.message ;
              this.signUpSuccessful = true;
              this.isSignUpFailed = false;
            },
            err => {
              this.errorMessage = err.error.message;
              this.isSignUpFailed = true;
            }
          );
        }
    }
    console.log(this.password);
  }
  reloadPage(): void {
    window.location.reload();
  }
  receiveitem($event: string ) {  
    this.item = $event;  
    } 
    public onChange(event:any) {
      this.delegation = event.target.value ;
      console.log(this.delegation)
  }
}
