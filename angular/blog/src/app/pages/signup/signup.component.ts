import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }


  signup() {

  }

}
