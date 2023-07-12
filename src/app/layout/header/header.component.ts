import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AccountsService } from 'src/app/services/accounts.services';

@Component({
  selector: 'app-header',
  template: `
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a style="cursor: pointer;" (click)="navigateHome()" class="nav-link px-2 text-secondary">Home</a></li>
          <li *ngIf="isAuthen">
            <a routerLink="/users" class="nav-link px-2 text-white">Users</a>
          </li>
          <li *ngIf="!isAuthen">
            <a routerLink="/" class="nav-link px-2 text-white">Login</a>
          </li>
          <li *ngIf="isAuthen">
            <a routerLink="/" (click)="onLogout()" class="nav-link px-2 text-white">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </header>

  `,
  styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthen = false;
  isAuthen$ = this.accountService.isAuth$;
  destroy$ = new Subject<void>();
  constructor(private accountService: AccountsService,
    private router: Router) { }

  ngOnInit(): void {
    this.isAuthen$.pipe(takeUntil(this.destroy$)).subscribe(auth => {
      this.isAuthen = auth;
    })
  }

  onLogout(){
    this.accountService.logout();
  }

  navigateHome(){
    if(this.accountService.isAuth){
      this.router.navigate(['/home'])
    }else{
      this.router.navigate(['/account/login'])
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
