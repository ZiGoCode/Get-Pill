import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AuthNavberComponent } from './components/auth-navber/auth-navber.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthNavberComponent,
    AuthSidebarComponent,
    AuthContentComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule
  ],
  exports: [
    BsDropdownModule,
    AuthNavberComponent,
    AuthSidebarComponent,
    AuthContentComponent
  ]
})
export class SharedsModule { }
