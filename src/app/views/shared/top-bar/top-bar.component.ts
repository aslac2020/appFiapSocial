import { Component, OnInit } from '@angular/core';
import { LoggedUser, LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

loggedUser: LoggedUser | null = null;

  constructor(
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.loggedUser = this.loginService.getLoggedUser();
  }

}
