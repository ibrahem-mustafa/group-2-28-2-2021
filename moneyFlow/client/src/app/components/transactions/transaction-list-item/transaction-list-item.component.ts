import { Component, OnInit, Input } from '@angular/core';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { defaultTransaction, USER_TRANSACTION_INTERFACE } from 'src/app/interfaces/user.interface';
import { SwiftService } from 'src/app/services/swift.service';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.css'],
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction: USER_TRANSACTION_INTERFACE = defaultTransaction
  deleteIcon = faTrash;

  constructor(private swiftService: SwiftService) {}

  ngOnInit(): void {}

  deleteTransaction(id: string) {
    this.swiftService.deleteTransaction(id)
  }
}
