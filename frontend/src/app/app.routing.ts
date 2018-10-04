import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ListComponent} from "./list/list.component";
import{ UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {VideoComponent} from "./video/video.component";

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list-videous', component: ListComponent },
  { path: 'editor-dashboard', redirectTo: '/list', pathMatch: 'full' },
  { path:'user-dashboard', component:UserDashboardComponent},
  { path: 'video-details/:id', component: VideoComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
