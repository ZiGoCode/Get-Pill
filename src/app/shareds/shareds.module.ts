import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { AuthNavberComponent } from './components/auth-navber/auth-navber.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertServices } from './services/alert.services';
import { AccountService } from './services/account.services';
import { ValidatorsService } from './services/validators.service';


@NgModule({
  declarations: [
    AuthNavberComponent,
    AuthSidebarComponent,
    AuthContentComponent,
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule   
  ],
  exports: [
    BsDropdownModule,
    AuthNavberComponent,
    AuthSidebarComponent,
    AuthContentComponent,
    ReactiveFormsModule,
    FormsModule,
    ModalModule
  ],
  providers: [
    AlertServices,
    // AccountService,
    ValidatorsService
  ]
})
export class SharedsModule { }
