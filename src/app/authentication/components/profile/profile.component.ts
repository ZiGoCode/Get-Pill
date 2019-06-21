import { Component, OnInit } from '@angular/core';
import { IProfileComponent } from './profile.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/shareds/services/account.services';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertServices } from 'src/app/shareds/services/alert.services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, IProfileComponent {
  form: FormGroup;

  positionItems: any[] = [
    'Frontend Developer',
    'Backend Developer'
  ];

  constructor(
    private builder: FormBuilder,
    private account: AccountService,
    private authen: AuthenService,
    private alert: AlertServices
  ) {
    this.initialCreateFormData();
    this.initialLoadUpdateFormData();
  }

  ngOnInit() {

  }
  onSubmit() {
    this.form.value;
    console.log(this.form.value);
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      email: [''],
      firstname: [''],
      lastname: [''],
      position: [''],
      image: [null]
    });
    this.form.get('email').disable();
  }

  private initialLoadUpdateFormData() {
    this.account
      .getUserLogin(this.authen.getAuthenticated())
      .then(user => {
        this.form.controls['email'].setValue(user.email),
        this.form.controls['firstname'].setValue(user.firstname),
        this.form.controls['lastname'].setValue(user.lastname),
        this.form.controls['position'].setValue(user.position),
        this.form.controls['image'].setValue(user.image)
      })
      .catch(err => this.alert.notify(err.Message));
  }

}


