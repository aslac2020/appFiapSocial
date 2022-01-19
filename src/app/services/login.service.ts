import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = "https://fiap-social-api.herokuapp.com/sessions";

export interface UserLogin {
  email: string;
  password: string;
}

export interface LoggedUser{
  student: Student,
  token: string
}

export interface Student{
  studentId: number,
  name: string,
  ra: string,
  email: string,
  image: string
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private loggedUser: LoggedUser | null = null;

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
}
