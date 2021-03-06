import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/adminService.service';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private adminS:AdminService, private router: Router,private token: TokenStorageService) { }
  currentUser: any;
  notif:any;
  ngOnInit() {
    this.currentUser=this.token.getUser;
    this.adminS.getNotifications().subscribe(data=>this.notif=data)
    // if(this.currentUser.role!=="admin")
    //   this.router.navigate(['/admin/login']);
  }
  logOut(){
    this.token.signOut();
    this.router.navigate(['/admin/login']);
  }
}
