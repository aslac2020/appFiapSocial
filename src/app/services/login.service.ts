import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = "https://fiap-social-api.herokuapp.com/sessions";
const REGISTER_USER = "https://fiap-social-api.herokuapp.com/students"

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister{
  student: NewStudent,
  password: string;
}

export interface RegisterUser{
  student: NewStudent,
  token: string
}

export interface LoggedUser{
  student: Student,
  token: string
}

export interface NewStudent{
  ra: string,
  name: string,
  email: string,
  password: string,
}

export interface Student{
  studentId: number,
  name: string,
  ra: string,
  email: string,
  image: string,
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private loggedUser: LoggedUser | null = null;

  private registerUser: RegisterUser | null = null;

  constructor(private httpClient: HttpClient) {}

  login(userLogin: UserLogin) {
   return this.httpClient.post<LoggedUser>(API_URL,userLogin);
  }

  setLoggedUser(user: LoggedUser) {
    this.loggedUser = user;
  }

  getLoggedUser(): LoggedUser | null{
    return this.loggedUser;
  }

  register(userRegister: UserRegister ){
    return this.httpClient.post<RegisterUser>(REGISTER_USER,userRegister);

  }
  setRegisterUser(userRegister: RegisterUser){
    this.registerUser = userRegister;
  }

  getRegisterUser(): RegisterUser | null{
    return this.registerUser;
  }
}
