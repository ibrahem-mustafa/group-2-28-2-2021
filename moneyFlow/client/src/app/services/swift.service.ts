import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  USER_BRANCH_INTERFACE,
  USER_TRANSACTION_INTERFACE,
} from '../interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SwiftService {
  branchesBaseUrl = 'http://localhost:3000/swift/branches';
  transactionsBaseUrl = 'http://localhost:3000/swift/transaction';
  constructor(private userService: UserService, private http: HttpClient) {}

  private _branches: USER_BRANCH_INTERFACE[] = [];
  private _transactions: USER_TRANSACTION_INTERFACE[] = [];

  requestOptions() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }

  fetchBranches() {
    this.http
      .get<{ branches: USER_BRANCH_INTERFACE[] }>(
        this.branchesBaseUrl,
        this.requestOptions()
      )
      .subscribe(
        (data) => (this._branches = data.branches),
        (err) => console.log(err)
      );
  }

  fetchTransactions() {
    this.http
      .get<{ transactions: USER_TRANSACTION_INTERFACE[] }>(
        this.transactionsBaseUrl,
        this.requestOptions()
      )
      .subscribe(
        (data) => (this._transactions = data.transactions),
        (err) => console.log(err)
      );
  }

  getBranches() {
    return this._branches.slice();
  }

  getTransactions() {
    return this._transactions.slice();
  }

  createBranch(name: string, balance: number) {
    this.http
      .post<{ branches: USER_BRANCH_INTERFACE[] }>(
        this.branchesBaseUrl,
        { name, balance },
        this.requestOptions()
      )
      .subscribe(
        (data) => (this._branches = data.branches),
        (err) => console.log(err)
      );
  }

  createTransaction(data: {
    type: string,
    fromId: string,
    toId: string,
    amount: number,
    note: string
  }) {
    this.http.post<{ transaction: USER_TRANSACTION_INTERFACE }>(
      this.transactionsBaseUrl,
      data,
      this.requestOptions()
    ).subscribe(
      data => {
        const transaction = data.transaction
        this._transactions.push(transaction);

        const {type, from, to, amount} = transaction

        const fromBranch = this._branches.find(branch => branch._id == from.id)!;

        const amountSign = type === 'income' ? 1 : -1;

        fromBranch.balance += amount * amountSign;
        if (type === 'transfer') {
          const toBranch = this._branches.find(
            (branch) => branch._id == to.id
          )!;

          toBranch.balance += amount;
        }
      },
      err => console.log(err)
    );
  }

  deleteTransaction(id: string) {
    this.http.delete(`${this.transactionsBaseUrl}/${id}`, this.requestOptions()).subscribe(
      result => {
        const transactionIndex = this._transactions.findIndex(trans => trans._id == id);
        if (transactionIndex > -1) {
          const { from, to, amount, type } = this._transactions[transactionIndex]

          const amountSign = type === 'income' ? -1 : 1

          const fromBranch = this._branches.find(branch => branch._id == from.id)!;

          fromBranch.balance += amount * amountSign;

          if (type === 'transfer') {
            const toBranch = this._branches.find(
              (branch) => branch._id == to.id
            )!;
            toBranch.balance -= amount
          }

          this._transactions.splice(transactionIndex, 1)
        }
      },
      err => console.log(err)
    )
  }
}
