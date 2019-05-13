import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [
    { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full' },
    { path: AuthURL.Dashboard, component: DashboardComponent },
    { path: AuthURL.Setting, component: SettingComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRouting { }