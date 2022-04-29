import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/TokenStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles!: string[];
  isLoggedIn = false;
  cin!:string
  constructor(private tokenStorageService: TokenStorageService){}
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.cin = user.cin;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
