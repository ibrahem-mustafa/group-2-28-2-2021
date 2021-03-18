import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-default-nav',
  templateUrl: './default-nav.component.html',
  styleUrls: ['./default-nav.component.css']
})
export class DefaultNavComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  isUserExist(): boolean {
    return this.userService.userExist()
  }

  signOut() {
    this.userService.clear();
  }

}
