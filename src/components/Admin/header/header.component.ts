import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private token: TokenStorageService) { }
  currentUser: any;

  ngOnInit() {
    this.currentUser=this.token.getUser;
    // if(this.currentUser.role!=="admin")
    //   this.router.navigate(['/admin/login']);
  }
  logOut(){
    this.token.signOut();
    this.router.navigate(['/admin/login']);
  }
}
