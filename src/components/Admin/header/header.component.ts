import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/TokenStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
  }
  logOut(){
    this.token.signOut();
  }
}
