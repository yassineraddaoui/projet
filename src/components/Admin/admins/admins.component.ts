import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/adminService.service';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  sub=false;
  admins!: Admin[];
  adminMat!: string;
  word!:string;
  c!:Admin[];
  mat!:string;
  password!:string;
  role!:string;
  constructor(private adminS:AdminService) { }

  ngOnInit() {
  }
  listCandidat(){
    console.log(this.word)
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
  deleteAdmin(){
    this.adminS.deleteAdmin(this.mat).subscribe(data=>console.log("DELETED SUCCESS:\n"+data));
  }
  addAdmin(){
    this.adminS.addAdmin(new Admin(this.mat,this.password,this.role)).subscribe(data=>console.log("ADDED:"+data));
  }
}
