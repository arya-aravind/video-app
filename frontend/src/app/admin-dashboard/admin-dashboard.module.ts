import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {admin_routes} from "./admin.routing";
import { ListComponent } from './list/list.component';
import { AddVideousComponent } from './add-videous/add-videous.component';
import {AdminService} from "./_services/admin.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule,HttpClient} from "@angular/common/http";

import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    admin_routes,
     ReactiveFormsModule,
    HttpClientModule,
HttpModule
  
  ],
  exports:[
  ListComponent
  ],
  declarations: [ListComponent, AddVideousComponent],
  providers: [AdminService],
})
export class AdminDashboardModule { }
