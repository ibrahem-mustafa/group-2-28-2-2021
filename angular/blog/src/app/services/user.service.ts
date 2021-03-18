import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_RES_TYPE } from '../types/login-response.type';
import { USER_TYPE } from '../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  setUser(data: LOGIN_RES_TYPE): void {
    window.localStorage.setItem('token', data.token)
    window.localStorage.setItem('user', JSON.stringify(data.user));
  }

  getUser(): USER_TYPE | null {
    const userData = window.localStorage.getItem('user');
    if (!userData) return null;
    return JSON.parse(userData);
  }

  userExist(): boolean {
    return this.getUser() !== null
  }

  clear() {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
