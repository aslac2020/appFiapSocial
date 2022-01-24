import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedUser, LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

checkoutForm: any;


  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.checkoutForm = formBuilder.group({
      ra: ['', Validators.required, Validators.maxLength(7)],
      name: '',
      email: ['', Validators.required, Validators.email],
      password: '',
    })
  }

  ngOnInit(): void {
  }

  cadastrar(): void {
    const userRegister = this.checkoutForm.value;
     userRegister.ra = userRegister.ra.toString();
    this.loginService.register(userRegister).subscribe({
      next: data => this.loginService.setRegisterUser(data),
      error: ({error}) => alert(error.error),
      complete: () => this.router.navigate(['']),
    });

  }

}
