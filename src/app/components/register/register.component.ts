import { Component, OnInit } from '@angular/core';
import { IRegisterComponent } from './register.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AlertServices } from 'src/app/shareds/services/alert.services';
import { AccountService } from 'src/app/shareds/services/account.services';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { ValidatorsService } from 'src/app/shareds/services/validators.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent {
  form: FormGroup;
  Url: any;

  constructor(
    private builder: FormBuilder,
    private alert: AlertServices,
    private account: AccountService,
    private router: Router,
    private validators: ValidatorsService
  ) {

    this.initialCreateFormData();


  }

  onSubmit() {
    if (this.form.invalid)
      return this.alert.somting_wrong();

    this.account
      .onRegister(this.form.value)
      .then(res => {
        this.alert.notify('ลงทะเบียนสำเร็จ', 'info')
        this.router.navigate(['/', AppURL.Login]);
      })
      .catch(err => this.alert.notify(err.Message));
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validators.isPassword]],
      cpassword: ['', [Validators.required, this.validators.comparePassword('password')]]
    });
  }

}
