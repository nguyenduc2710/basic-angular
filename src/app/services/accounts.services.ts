import { Injectable } from "@angular/core";
import { User } from "../model/user.class";
import { UserModel } from "../model/user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AccountsService {
  isAuth = false;
  isAuth$ = new BehaviorSubject<boolean>(false);
  private accounts: User[] = [
    new User(
      'Nguyen Van',
      'A',
      'admin',
      '123456'
    ),
    new User(
      'Testing',
      'User',
      'testing',
      '123456'
    ),
    new User(
      'Nguyen',
      'Duc',
      'ducnhh',
      '1'
    ),
  ]

  getUser() {
    return this.accounts.slice();
  }

  onCreateUser(firstName: string,
    lastName: string,
    username: string,
    password: string) {
    this.accounts.push(new User(firstName, lastName, username, password));
    console.log("Create success");
  }

  authenUser(username: string, password: string): boolean {
    for (let i = 0; i < this.accounts.length; i++) {
      const currentUser = this.accounts[i];
      if (currentUser.username === username && currentUser.password === password) {
        this.isAuth = true;
        this.isAuth$.next(true);
        break;
      }
    }
    return this.isAuth;
  }

  logout() {
    this.isAuth = false;
    this.isAuth$.next(false);
  }
}
