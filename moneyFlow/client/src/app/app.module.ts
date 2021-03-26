import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { DefaultNavComponent } from './components/nav/default-nav/default-nav.component';
import { FormsModule } from '@angular/forms';
import { ActionBarComponent } from './components/nav/action-bar/action-bar.component';
import { BranchListComponent } from './components/branches/branch-list/branch-list.component';
import { BranchListItemComponent } from './components/branches/branch-list-item/branch-list-item.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './components/transactions/transaction-list-item/transaction-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewTransactionComponent } from './components/modal/new-transaction/new-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DefaultNavComponent,
    ActionBarComponent,
    BranchListComponent,
    BranchListItemComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    NewTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
