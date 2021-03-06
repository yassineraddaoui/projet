import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private tokenStorage :TokenStorageService,private router:Router) { }

  ngOnInit() {
    var currentUser = this.tokenStorage.getUser();
     if(currentUser.roles[0]==='ROLE_MODERATOR')
     this.router.navigate(['/moderator']);
  
  }

}
