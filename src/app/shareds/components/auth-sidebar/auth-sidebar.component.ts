import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { IAuthSidebarComponent } from './auth-sideber.interface';
import { IAccount, AccountService } from '../../services/account.services';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertServices } from '../../services/alert.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.css']
})
export class AuthSidebarComponent implements OnInit, IAuthSidebarComponent {

  UserLogin: IAccount;
  AppURL = AppURL;
  AuthURL = AuthURL;

  constructor(
    private account: AccountService,
    private authen: AuthenService,
    private alert: AlertServices,
    private router: Router
  ) {

    this.initialLoadUSerLogin();

  }

  ngOnInit() {
  }

  private initialLoadUSerLogin() {
    this.account
      .getUserLogin(this.authen.getAuthenticated())
      .then(userLogin => {
        this.UserLogin = userLogin;
      })
      .catch(err => {
        this.alert.notify(err.Message);
        this.authen.clearAuthenticated();
        this.router.navigate(['/', AppURL.Login]);
      });
  }

}
