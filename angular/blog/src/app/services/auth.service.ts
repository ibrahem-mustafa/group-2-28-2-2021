import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_RES_TYPE } from '../types/login-response.type';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }

  baseUrl: string = 'http://localhost:3000/auth'


  signup(data: {
    email: string,
    name: string,
    phone: string,
    address: string,
    password: string,
  }) {
    console.log(data)
  }

  login(data: { email: string, password: string }) {
    this.http.post<LOGIN_RES_TYPE>(`${this.baseUrl}/login`, data).subscribe(
      (data) => {
        this.userService.setUser(data);
        this.router.navigate(['dashboard'])
      },
      (err) => console.log(err)
    );
  }
}
