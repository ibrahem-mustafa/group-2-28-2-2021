import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './guards/is-auth.guard';
import { IsNotAuthGuard } from './guards/is-not-auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { ArticleDetailsComponent } from './pages/articles/article-details/article-details.component';
import { ArticleFormComponent } from './pages/articles/article-form/article-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [IsNotAuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsAuthGuard]
  },
  {
    path: 'dashboard/article/:id',
    component: ArticleFormComponent
  },
  {
    path: 'dashboard/articles/:id',
    component: ArticleDetailsComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  // {
  //   path: 'todoManager',
  //   component: TodosComponent
  // },
  // {
  //   path: 'todos',
  //   redirectTo: '/todoManager'
  // },

  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
