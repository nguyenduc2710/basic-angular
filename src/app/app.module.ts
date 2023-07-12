import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { UsersComponent } from './users/users.component';
import { AddComponent } from './users/add/add.component';
import { HeaderComponent } from './layout/header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './layout/header/home.component';
import { EditComponent } from './users/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    AddComponent,
    HeaderComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
