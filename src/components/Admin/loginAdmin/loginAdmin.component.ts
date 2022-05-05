import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthLoginAdmin } from 'src/app/model/AuthLoginAdmin';
import { AuthAdminService } from 'src/app/services/authAdmin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginAdmin',
  templateUrl: './loginAdmin.component.html',
  styleUrls: ['./loginAdmin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private auth:AuthAdminService,
    private router: Router, ) { }
  loginForm!: FormGroup;
  mat!:string;
  password!:string;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      mat: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      password: new FormControl('', [Validators.required])
    })
  }
  get matField(): any {
    return this.loginForm.get('mat');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }
  loginFormSubmit(): void {
    console.log(this.loginForm.value);
  }
  onSubmit(){
    console.log(335644)
    this.auth.loginAdmin(new AuthLoginAdmin(this.mat,this.password)).subscribe(data => this.router.navigate(['/admin']));
  }
}
