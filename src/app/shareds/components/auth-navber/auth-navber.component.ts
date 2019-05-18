import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertServices } from '../../services/alert.services';

@Component({
  selector: 'app-auth-navber',
  templateUrl: './auth-navber.component.html',
  styleUrls: ['./auth-navber.component.css']
})
export class AuthNavberComponent implements OnInit {

  AppURL = AppURL;
  AuthURL = AuthURL;

  constructor(
    private router: Router,
    private authen: AuthenService,
    private alert : AlertServices
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.authen.clearAuthenticated();
    this.router.navigate(['/', AppURL.Login]);
    this.alert.notify('ออกจากระบบสำเร็จ', 'info');
  }

}
