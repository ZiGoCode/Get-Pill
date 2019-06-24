import { Component, OnInit, Input } from '@angular/core';
import { IChangePasswordComponent } from './change-password.interface';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertServices } from 'src/app/shareds/services/alert.services';
import { ValidatorsService } from 'src/app/shareds/services/validators.service';
import { AccountService } from 'src/app/shareds/services/account.services';
import { AuthenService } from 'src/app/services/authen.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, IChangePasswordComponent {

  @Input('modalRef') modalRef: BsModalRef;
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private alert: AlertServices,
    private validators: ValidatorsService,
    private account: AccountService,
    private authen: AuthenService,

  ) {
    this.initialCreateFormData();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.invalid)
      return this.alert.somting_wrong();
    this.account
      .onChangePassword(this.authen.getAuthenticated(), this.form.value)
      .then(() => {
        this.alert.notify('เปลี่ยนรหัสผ่านสำเร็จ', 'info');
        this.modalRef.hide();
      })
      .catch(err => this.alert.notify(err.Message))
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      old_pass: ['', [Validators.required]],
      new_pass: ['', [Validators.required, this.validators.isPassword]],
      cnew_pass: ['', [Validators.required, this.validators.comparePassword('new_pass')]]
    });
  }

}
