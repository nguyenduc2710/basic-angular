import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.class';
import { AccountsService } from '../services/accounts.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private accountService: AccountsService){}

  ngOnInit(): void {
    this.users = this.accountService.getUser();
  }


}
