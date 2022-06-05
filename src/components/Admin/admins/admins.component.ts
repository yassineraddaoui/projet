import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/adminService.service';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  sub=false;
  admins!: any;
  adminMat!: string;
  word!:string;
  c!:any[];
  roles!:string;
  rolesAdd!:string[];
  matricule!:string;
  password!:string;
  role!:string;
  currentUser: any;
  constructor(private token: TokenStorageService,private adminS:AdminService) { }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  form = new FormGroup({
    matricule: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(8)],),
    password: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(20)],)
  });
  modifierRole(matricule:string){
    this.adminS.modifierRole(this.roles,matricule).subscribe(data=>console.log(data));
  }
  public onChange(event:any) {
    this.roles=event.target.value  ;

 }
 public onChange2(event:any) {
  this.rolesAdd=[];
  this.rolesAdd=[event.target.value];
}
ngOnInit() {
  this.rolesAdd=["admin"];
    this.currentUser = this.token.getUser();

    this.getAdmins();
  }
  getAdmins(){
    this.adminS.getAllAdmins().subscribe(data=>{
      console.log(data)
      this.admins=data;
      this.c=data;
    });

  }
  
  listCandidat(){
    if(this.word===""|| this.word===undefined){
      this.c=this.admins;
      return;
    }
    this.c=[];
    for(var i of this.admins){
      if (i.matricule.startsWith(this.word)){
        this.c.push(i)
      }
    }
    console.log(this.c)
  }
  deleteAdmin(matricule:string){
    for(var i=0;i<this.c.length;i++){
      if(this.c[i].matricule===matricule)
      this.c.splice(i,1);
    }
     this.adminS.deleteAdmin(matricule).subscribe(data=>console.log("DELETED SUCCESS:\n"+data));

  }
  addAdmin(){
    this.sub=true;
    if (this.form.invalid) {
      return;
    }
    this.adminS.addAdmin(this.matricule,this.password,this.rolesAdd).subscribe(data=>{
      this.c.push(new Admin(this.matricule,this.password,this.rolesAdd));  console.log("ADDED:"+data)}
      );
      this.sub=false;

    }
}