import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-default-nav',
  templateUrl: './default-nav.component.html',
  styleUrls: ['./default-nav.component.css'],
})
export class DefaultNavComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get userExist() {
    return this.userService.userExist();
  }

  logout() {
    this.userService.logout()
  }
}
