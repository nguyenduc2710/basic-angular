import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { AccountsService } from 'src/app/services/accounts.services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentUser!: User;
  editUser = new FormGroup({
    'firstName': new FormControl(this.currentUser.firstName, Validators.required),
    'lastName': new FormControl(this.currentUser.lastName, Validators.required),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    'repeatPassword': new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  // currentUser: User = {

  // };
  constructor(private accountService: AccountsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentUser = this.accountService.getCurrentUser();
    // this.editUser =
  }

  onEditUser() {
    const user = this.editUser.value;
    if(user.firstName && user.lastName && user.password)
    this.accountService.onEditUser(
      user.firstName,
      user.lastName,
      this.currentUser.username,
      user.password
    )
  }
}
