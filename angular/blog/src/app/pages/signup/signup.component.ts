import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string = '';
  phone: string = ''
  email: string = ''
  password: string = ''
  address: string = ''

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  signup() {
    this.authService.signup({
      email: this.email,
      name: this.name,
      phone: this.phone,
      password: this.password,
      address: this.address,
    })
  }

}
