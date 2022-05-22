import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/adminService.service';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-headerMod',
  templateUrl: './headerMod.component.html',
  styleUrls: ['./headerMod.component.css']
})
export class HeaderModComponent implements OnInit {


  constructor(private adminS:AdminService, private router: Router,private token: TokenStorageService) { }
  currentUser: any;
  notif:any;
  ngOnInit() {
    this.currentUser=this.token.getUser;
  }
  logOut(){
    this.token.signOut();
    this.router.navigate(['/admin/login']);
  }
}
