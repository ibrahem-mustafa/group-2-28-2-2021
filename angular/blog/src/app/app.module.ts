import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from './components/article/article.component';
import { DefaultNavComponent } from './components/nav/default-nav/default-nav.component';
import { UserComponent } from './components/users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    DefaultNavComponent,
    UserComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],

  providers: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
