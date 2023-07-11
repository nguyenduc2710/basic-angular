import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HeaderComponent } from './layout/header/header.component';
import { UsersComponent } from './users/users.component';
import { AddComponent } from './users/add/add.component';
import { HomeComponent } from './layout/header/home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'account/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
