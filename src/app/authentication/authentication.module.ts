import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ContentComponent } from './components/content/content.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SettingComponent,
    ContentComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule
  ]
})
export class AuthenticationModule { }
