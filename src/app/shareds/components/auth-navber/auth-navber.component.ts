import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';

@Component({
  selector: 'app-auth-navber',
  templateUrl: './auth-navber.component.html',
  styleUrls: ['./auth-navber.component.css']
})
export class AuthNavberComponent implements OnInit {

  AppURL = AppURL;
  AuthURL = AuthURL;

  constructor() { }

  ngOnInit() {
  }

}
