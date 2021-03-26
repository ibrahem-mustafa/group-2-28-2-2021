import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SwiftService } from 'src/app/services/swift.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  type = 'expense'
  amount = 10;
  note = ''
  from = ''
  to = ''
  constructor(public modal: NgbActiveModal, private swiftService: SwiftService) { }

  ngOnInit(): void {
  }

  createTransaction() {

    this.modal.close()

    this.swiftService.createTransaction({type: this.type, amount: this.amount , fromId : this.from, toId: this.to, note: this.note})
  }

  get branches() {
    return this.swiftService.getBranches()
  }

  get toBranches() {
    return this.branches.filter(branch => branch._id !== this.from)
  }

}
