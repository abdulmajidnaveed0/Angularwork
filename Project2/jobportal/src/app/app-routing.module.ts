import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

//import { AuthGuardService } from './services/guard.service';
import {LoginAuthService} from './services/loginauth.service';
import { LoginguardService } from './services/loginguard.service';

//const routes: Routes = [];
//const routes: Routes = [];
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate:
   [LoginguardService]},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
