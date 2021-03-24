import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_RES_INTERFACE } from '../interfaces/auth-res.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  baseUrl: string = 'http://localhost:3000/auth'

  login(email: string, password: string) {
    this.http.post<AUTH_RES_INTERFACE>(`${this.baseUrl}/signin`, {
      email,
      password
    }).subscribe(
      (data) => {
        this.userService.setUser(data)
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  signup(data: { name: string, email: string, password: string }) {
    this.http.post(`${this.baseUrl}/signup`, data).subscribe(
      (data)=>{
         this.router.navigate(['login']);
      },
      err => console.log(err)
    )
  }
}
