import { Component, OnInit, Input } from '@angular/core';
import { USER_BRANCH_INTERFACE } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-branch-list-item',
  templateUrl: './branch-list-item.component.html',
  styleUrls: ['./branch-list-item.component.css']
})
export class BranchListItemComponent implements OnInit {
  @Input() branch: USER_BRANCH_INTERFACE = {_id: '', name: '', balance: 0}
  constructor() { }

  ngOnInit(): void {
  }

}
