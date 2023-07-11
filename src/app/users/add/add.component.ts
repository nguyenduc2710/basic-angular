import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.services';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  createUser: FormGroup;

  constructor(private accountService: AccountsService,
    private router: Router) {
    this.createUser = new FormGroup({});
  }

  ngOnInit(): void {
    this.createUser = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    })
  }

  onCreateAcc() {
    this.accountService.onCreateUser(
      this.createUser.value['firstName'],
      this.createUser.value['lastName'],
      this.createUser.value['username'],
      this.createUser.value['password'],
    )
    this.router.navigate(['/users']);
  }
}
