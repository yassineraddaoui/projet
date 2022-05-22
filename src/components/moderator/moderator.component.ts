import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {

  constructor(private tokenStorage :TokenStorageService,private router:Router) { }

  ngOnInit() {
    var currentUser = this.tokenStorage.getUser();
    if(currentUser.roles[0]==="ROLE_ADMIN")
    this.router.navigate(['/admin']);
    if(currentUser.roles[0]==="ROLE_USER")
    this.router.navigate(['/candidature']);

  }

}
