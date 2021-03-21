import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultNavComponent } from './components/nav/default-nav/default-nav.component';
import { UserComponent } from './components/users/user/user.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoListItemComponent } from './todos/todo-list-item/todo-list-item.component';
import { TodoListFormComponent } from './todos/todo-list-form/todo-list-form.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleListItemComponent } from './articles/article-list-item/article-list-item.component';
import { ArticleDetailsComponent } from './pages/articles/article-details/article-details.component';
import { ArticleFormComponent } from './pages/articles/article-form/article-form.component';
import { ActionNavComponent } from './components/nav/action-nav/action-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultNavComponent,
    UserComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFormComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TodosComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ArticleListComponent,
    ArticleListItemComponent,
    ArticleDetailsComponent,
    ArticleFormComponent,
    ActionNavComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],

  providers: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
