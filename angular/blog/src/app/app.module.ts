import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from './components/article/article.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
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
