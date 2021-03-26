import { Component, OnInit } from '@angular/core';
import { SwiftService } from 'src/app/services/swift.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  constructor(private swiftService: SwiftService) { }

  ngOnInit(): void {
  }

  get branches() {
    return this.swiftService.getBranches();
  }

}
