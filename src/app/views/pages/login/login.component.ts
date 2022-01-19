import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router) {}

  ngOnInit(): void {}

  login() {
    const user = {
      email: 'avanade@gmail.com',
      password: 'abcd4321',
    };

    this.loginService.login(user).subscribe({
      next: data => this.loginService.setLoggedUser(data),
      error: ({ error }) => alert(error.error),
      complete: () => this.router.navigate(["feed"])
    });
  }
}
