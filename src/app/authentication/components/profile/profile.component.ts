import { Component, OnInit, TemplateRef } from '@angular/core';
import { IProfileComponent } from './profile.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/shareds/services/account.services';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertServices } from 'src/app/shareds/services/alert.services';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, IProfileComponent {

  form: FormGroup;
  modalRef: BsModalRef;
  positionItems: any[] = [
    'Frontend Developer',
    'Backend Developer'
  ];

  constructor(
    private builder: FormBuilder,
    private account: AccountService,
    private authen: AuthenService,
    private alert: AlertServices,
    private modalService: BsModalService
  ) {
    this.initialCreateFormData();
    this.initialLoadUpdateFormData();
  }

  ngOnInit() { }

  onSubmit() {
    if (this.form.invalid) return this.alert.somting_wrong();
    this.account
      .onUpdateProfile(this.authen.getAuthenticated(), this.form.value)
      .then(() => this.alert.notify('แก้ไขข้อมูลสำเร็จ', 'info'))
      .catch(err => this.alert.notify(err.Message));
    console.log(this.form.value);
  }

  onConvertImage(input: HTMLInputElement) {
    const imageControl = this.form.controls['image'];
    const imageTypes = ['image/jpeg', 'image/png'];
    imageControl.setValue(null);
    if (input.files.length == 0) return;
    if (imageTypes.indexOf(input.files[0].type) < 0) {
      input.value = null;
      return this.alert.notify('กรุณาอัพโหลดรูปภาพเท่านั้น');
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.addEventListener('load', () => {
      imageControl.setValue(reader.result);
    });
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      email: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      position: ['', Validators.required],
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


