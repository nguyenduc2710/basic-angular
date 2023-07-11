import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  isAuthen = false;
  constructor(private accountService: AccountsService,
    private router: Router){}

  onSubmit(){
    this.isAuthen = this.accountService.authenUser(this.username, this.password);
    if(this.isAuthen){
      this.router.navigate(['/home']);
    } else{
      alert("Wrong username or password, pls try again!")
    }
  }
}
