import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-headerCondidature',
  templateUrl: './headerCondidature.component.html',
  styleUrls: ['./headerCondidature.component.css']
})
export class HeaderCondidatureComponent implements OnInit {
  currentUser:any;
  constructor(private token: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }
  logOut(){
    this.token.signOut();
    this.router.navigate(['/login']);

  }
}
