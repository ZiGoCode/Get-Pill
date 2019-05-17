import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AuthNavberComponent } from './components/auth-navber/auth-navber.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertServices } from './services/alert.services';
import { AccountService } from './services/account.services';


@NgModule({
  declarations: [
    AuthNavberComponent,
    AuthSidebarComponent,
    AuthContentComponent,
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
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
    FormsModule
  ],
  providers: [
    AlertServices,
    AccountService
  ]
})
export class SharedsModule { }
