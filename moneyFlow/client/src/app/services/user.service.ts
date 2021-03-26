import { Injectable } from '@angular/core';
import { AUTH_RES_INTERFACE } from '../interfaces/auth-res.interface';
import { USER_INTERFACE } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  setUser(data: AUTH_RES_INTERFACE) {
    window.localStorage.setItem('token', `Bearer ${data.token}`);
    const {id, name, email, } = data.user;
    window.localStorage.setItem('user', JSON.stringify({id, name, email}));
  }

  getUser(): USER_INTERFACE {
    return JSON.parse(window.localStorage.getItem('user')!);
  }

  getToken() {
    return window.localStorage.getItem('token') || '';
  }

  userExist() {
    // '' | null | undefined | false => false
    // !false => true
    // !!false => !true => false

    return !!this.getUser();
  }

  logout() {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
  }
}
