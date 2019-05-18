import { Component, OnInit } from '@angular/core';
import { ILoginComponent } from './iogin.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertServices } from 'src/app/shareds/services/alert.services';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AccountService } from 'src/app/shareds/services/account.services';
import { AuthenService } from 'src/app/services/authen.service';
declare const App: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {
  Url: any;
  form: FormGroup;


  constructor(
    private builder: FormBuilder,
    private alert: AlertServices,
    private router: Router,
    private account: AccountService,
    private authen: AuthenService
  ) {
    this.initialCreateFomrData();
  }

  ngOnInit() {
    App.forgot();
  }

  onSubmit(): void {
    if (this.form.invalid)
      return this.alert.somting_wrong();
    this.account
      .onLogin(this.form.value)
      .then(res => {
        this.authen.setAuthenticated(res.accessToken);
        this.alert.notify('เข้าสู่ระบบสำเร็จ', 'info')
        this.router.navigate(['/', AppURL.Authen, AuthURL.Dashboard]);
      })
      .catch(err => this.alert.somting_wrong(err.Message));
  }

  private initialCreateFomrData() {
    this.form = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [true]
    });
  }

}
