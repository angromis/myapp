import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication.service";
import { User } from "../shared/user";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  userlogedin : User;
  constructor(
    public authService: AuthenticationService
  ) { 
    this.userlogedin = this.authService.getUser();
  }

  ngOnInit() {

  }

}