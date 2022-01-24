import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  checkoutForm: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.checkoutForm = formBuilder.group({
        email: ['' , [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ''
      })
    }

  ngOnInit(): void {}

  login() {
    const user = this.checkoutForm.value;
    this.loginService.login(user).subscribe({
      next: data => this.loginService.setLoggedUser(data),
      error: ({ error }) => alert(error.error),
      complete: () => this.router.navigate(["feed"])
    });
  }
}
