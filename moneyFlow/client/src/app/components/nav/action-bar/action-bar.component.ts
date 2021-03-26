import { Component, OnInit } from '@angular/core';
import {faPlus}  from '@fortawesome/free-solid-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwiftService } from 'src/app/services/swift.service';
import { NewTransactionComponent } from '../../modal/new-transaction/new-transaction.component';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent implements OnInit {
  constructor(private modalService: NgbModal, private swiftService: SwiftService) {}

  ngOnInit(): void {}

  plusIcon = faPlus;

  name = '';
  balance = 0;

  openNewBranchModal(modal: any) {
    this.modalService.open(modal);
  }

  createBranch() {
    this.swiftService.createBranch(this.name, this.balance)
  }

  openNewTransactionModal() {
    this.modalService.open(NewTransactionComponent);
  }
}
