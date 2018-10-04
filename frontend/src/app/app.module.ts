import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';

import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule,HttpClient} from "@angular/common/http";
import {HttpModule} from "@angular/http";

import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import{AlertService}from "./services/alert.service";

import{AdminDashboardModule} from "./admin-dashboard/admin-dashboard.module";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { VideoComponent } from './video/video.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    UserDashboardComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
     routing,
     ReactiveFormsModule,
    HttpClientModule,
    AdminDashboardModule,
    HttpModule
  ],
  providers: [AuthService, UserService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
